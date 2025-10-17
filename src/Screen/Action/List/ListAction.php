<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Action\List;

use Doctrine\ORM\EntityManagerInterface;
use KevinPapst\TablerBundle\Screen\Action\DoctrineAction;
use KevinPapst\TablerBundle\Screen\Column\AbstractColumn;
use KevinPapst\TablerBundle\Screen\Column\BasePropertyColumn;
use KevinPapst\TablerBundle\Screen\Column\BooleanColumn;
use KevinPapst\TablerBundle\Screen\Column\CallbackColumn;
use KevinPapst\TablerBundle\Screen\Column\DateTimeColumn;
use KevinPapst\TablerBundle\Screen\Column\EnumColumn;
use KevinPapst\TablerBundle\Screen\Column\NumberColumn;
use KevinPapst\TablerBundle\Screen\Column\PropertyColumn;
use KevinPapst\TablerBundle\Screen\Column\TwigColumn;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PropertyAccess\Exception\AccessException;
use Symfony\Component\PropertyAccess\PropertyPathInterface;
use Twig\Environment;
use Twig\TemplateWrapper;
use function Symfony\Component\String\u;

class ListAction extends DoctrineAction
{
    private array $columns = [];
    private ?string $id = null;
    private bool $isResponsive = true;
    private bool $isStriped = false;
    private bool $hasFooter = false;

    public function __construct(
        RequestStack $requestStack,
        EntityManagerInterface $entityManager,
        private readonly Environment $twig,
    ) {
        parent::__construct($requestStack, $entityManager);
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function isResponsive(): bool
    {
        return $this->isResponsive;
    }

    public function isStriped(): bool
    {
        return $this->isStriped;
    }

    public function hasFooter(): bool
    {
        return $this->hasFooter;
    }

    public function pushColumn(AbstractColumn $column, array $options = []): self
    {
        $accessor = BasePropertyColumn::getPropertyAccessor();
        if (empty($options['label']) && $this->getDescriber() !== null && $column instanceof PropertyColumn) {
            $options['label'] = $this->getDescriber()->getPropertyLabel($column->getProperty());
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
        $template = $this->twig->load($template);
        $column = (new TwigColumn($template));

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

    protected function run(): void
    {
        $this->_params['records'] = $this->getQueryBuilder()->getQuery()->getResult();
        $male = $this->getDescriber()?->isMale();
        $this->_params['empty_message'] = implode(' ', [
            $male ? "Nenhum" : "Nenhuma",
            ($this->getDescriber()?->getSingular()) ?? "registro",
            $male ? "encontrado" : "encontrada",
        ]);
    }

    protected function setDefaultTableAttributes(array &$attr): void
    {
        $classes = ['table'];
        if ($this->isStriped) {
            $classes[] = 'table-striped';
        }
        if ($this->isResponsive) {
            $classes[] = 'table-responsive';
        }
        $attr['class'] = implode(' ', $classes);
        if (!empty($this->id)) {
            $attr['id'] = $this->id;
        }
    }

    final public function renderTableAttributes(): string
    {
        $attr = [];
        $this->setDefaultTableAttributes($attr);

        return $this->getEscaper()->safeAttributeSet($attr);
    }

    protected function setDefaultRowAttributes(object|array|null $record, array &$attr): void
    {
        // nop
    }

    final public function renderRowAttributes(object|array|null $record): string
    {
        $attr = [];
        $this->setDefaultRowAttributes($record, $attr);

        return $this->getEscaper()->safeAttributeSet($attr);
    }

    public function getEnabledColumnSpans(): int
    {
        return array_sum(array_map(function (AbstractColumn $column) {
            return $column->isEnabled() ? $column->getColSpan() : 0;
        }, $this->columns));
    }

    public function getTemplate(): string
    {
        return '@TablerBundle/crud/index.html.twig';
    }

    public function getTitle(): string
    {
        if ($this->getDescriber()) {
            return 'Listagem ' . lcfirst(u($this->getDescriber()->getOf(true))->title(true));
        } else {
            return 'Listagem';
        }
    }

    public function getSubTitle(): string
    {
        $filters = $this->getActiveFilters();
        if (empty($filters)) {
            return '';
        }
        $filtered = '<span class="filtered-by">Filtrando por:</span>';
        foreach ($filters as $filter) {
            $filter->renderControl();
        }

        return \sprintf('<div class="filtered">%s</div>', $filtered);
    }
}
