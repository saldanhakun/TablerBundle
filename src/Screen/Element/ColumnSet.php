<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\DoctrineBundle\Describer\BaseDescriber;
use Saldanhakun\TablerBundle\Screen\Column\AbstractColumn;
use Saldanhakun\TablerBundle\Screen\Column\BasePropertyColumn;
use Saldanhakun\TablerBundle\Screen\Column\BooleanColumn;
use Saldanhakun\TablerBundle\Screen\Column\CallbackColumn;
use Saldanhakun\TablerBundle\Screen\Column\DateTimeColumn;
use Saldanhakun\TablerBundle\Screen\Column\EnumColumn;
use Saldanhakun\TablerBundle\Screen\Column\NumberColumn;
use Saldanhakun\TablerBundle\Screen\Column\PhoneColumn;
use Saldanhakun\TablerBundle\Screen\Column\PropertyColumn;
use Saldanhakun\TablerBundle\Screen\Column\TwigColumn;
use Symfony\Component\PropertyAccess\Exception\AccessException;
use Symfony\Component\PropertyAccess\PropertyPathInterface;
use Twig\Environment;
use Twig\TemplateWrapper;

class ColumnSet extends Element
{
    private array $columns = [];
    private ?BaseDescriber $describer;
    private ?Environment $twig;

    public function __construct(?Environment $twig, ?BaseDescriber $describer, array $attributes = [])
    {
        parent::__construct('tr', '', $attributes);
        $this->setTwig($twig)->setDescriber($describer);
    }

    public function getDescriber(): ?BaseDescriber
    {
        return $this->describer;
    }

    public function setDescriber(?BaseDescriber $describer): self
    {
        $this->describer = $describer;

        return $this;
    }

    public function getTwig(bool $required = false): ?Environment
    {
        if ($required && !$this->twig) {
            throw new \LogicException('Twig needs to be set before using getTwig()');
        }

        return $this->twig;
    }

    public function setTwig(?Environment $twig): self
    {
        $this->twig = $twig;

        return $this;
    }

    public function pushColumn(AbstractColumn $column, array $options = []): self
    {
        $accessor = BasePropertyColumn::getPropertyAccessor();
        if (empty($options['label']) && $this->describer !== null && $column instanceof PropertyColumn) {
            $options['label'] = $this->describer->getPropertyLabel($column->getProperty());
        }
        foreach ($options as $name => $value) {
            if ($accessor->isWritable($column, $name)) {
                $accessor->setValue($column, $name, $value);
            } else {
                throw new AccessException("Parâmetro não reconhecido: $name");
            }
        }
        $this->columns[] = $column;

        return $this;
    }

    public function pushStringColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new PropertyColumn($property));

        return $this->pushColumn($column, $options);
    }

    public function pushIntegerColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new NumberColumn($property));

        return $this->pushColumn($column, $options);
    }

    public function pushFloatColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new NumberColumn($property));

        return $this->pushColumn($column, $options);
    }

    public function pushMoneyColumn(PropertyPathInterface|string $property, string $currency = 'R$ ', array $options = []): self
    {
        if (empty($options['currency'])) {
            $options['currency'] = $currency;
        }
        $column = (new NumberColumn($property));

        return $this->pushColumn($column, $options);
    }

    public function pushDateColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new DateTimeColumn($property));
        $defaults = ['format' => 'd/m/Y', 'fullFormat' => 'W, d/m/Y H:i:s (z)'];

        return $this->pushColumn($column, array_merge($defaults, $options));
    }

    public function pushTimeColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new DateTimeColumn($property));
        $defaults = ['format' => 'H:i', 'fullFormat' => 'H:i:s'];

        return $this->pushColumn($column, array_merge($defaults, $options));
    }

    public function pushDateTimeColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new DateTimeColumn($property));
        $defaults = ['format' => 'd/m/Y H:i', 'fullFormat' => 'W, d/m/Y H:i:s (z)'];

        return $this->pushColumn($column, array_merge($defaults, $options));
    }

    public function pushBooleanColumn(PropertyPathInterface|string $property, array $set = [], array $options = []): self
    {
        if (empty($options['labelSet']) && !empty($set)) {
            $options['labelSet'] = $set;
        }
        $column = (new BooleanColumn($property));

        return $this->pushColumn($column, $options);
    }

    public function pushIsActiveColumn(array $options = []): self
    {
        $column = (new BooleanColumn('isActive'));
        if (empty($options['labelSet'])) {
            $column->setLabelSet($column->combine(BooleanColumn::ICONS_CHECK_TIMES_QUESTION, BooleanColumn::ACTIVE_INACTIVE, BooleanColumn::COLOR_GREEN_RED_MUTED));
        }

        return $this->pushColumn($column, $options);
    }

    public function pushCallbackColumn(\Closure $callback, array $options = []): self
    {
        $column = (new CallbackColumn($callback));

        return $this->pushColumn($column, $options);
    }

    public function pushTwigColumn(TemplateWrapper|string $template, array $options = []): self
    {
        $template = $this->getTwig(true)->load($template);
        $column = (new TwigColumn($template));

        return $this->pushColumn($column, $options);
    }

    public function pushPhoneColumn(PropertyPathInterface|string $property, array $options = []): self
    {
        $column = (new PhoneColumn($property, $this->getTwig(true)));

        return $this->pushColumn($column, $options);
    }

    public function pushEnumColumn(PropertyPathInterface|string $property, string $enumClass, array $options = []): self
    {
        $column = (new EnumColumn($property))
            ->setEnumClass($enumClass);

        return $this->pushColumn($column, $options);
    }

    public function popColumn(): AbstractColumn
    {
        return array_pop($this->columns);
    }

    public function countColumns(): int
    {
        return \count($this->columns);
    }

    /** @return AbstractColumn[] */
    public function getColumns(): array
    {
        return $this->columns;
    }

    /** @return AbstractColumn[] */
    public function getEnabledColumns(): array
    {
        return array_filter($this->columns, function (AbstractColumn $column) { return $column->isEnabled(); });
    }

    public function getEnabledColumnSpans(): int
    {
        return array_sum(array_map(function (AbstractColumn $column) {
            return $column->isEnabled() ? $column->getColSpan() : 0;
        }, $this->columns));
    }
}
