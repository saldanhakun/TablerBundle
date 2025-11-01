<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Filter;

use Doctrine\ORM\QueryBuilder;
use Saldanhakun\TablerBundle\Enum\StringComparisonOperator;
use Symfony\Component\HttpFoundation\Request;

class StringFilter extends BaseFilter
{
    private string $property = 'email';
    private string $operator = StringComparisonOperator::EQUALS;
    private array|string|null $value = null;

    public function getOperator(bool $asString = true): StringComparisonOperator|string
    {
        return StringComparisonOperator::instanceOrString($this->operator, $asString);
    }

    public function setOperator(StringComparisonOperator|string $operator): self
    {
        $this->operator = StringComparisonOperator::assert($operator);

        return $this;
    }

    public function getProperty(): string
    {
        return $this->property;
    }

    public function setProperty(string $property): self
    {
        $this->property = $property;

        return $this;
    }

    public function getValue(): array|string|null
    {
        return $this->value;
    }

    public function setValue(array|string|null $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function apply(QueryBuilder $builder, array &$params, Request $request): void
    {
        $operator = $this->getOperator(false);
        $this->setValue($this->fromRequest($request, $this->value, $operator->isArray() ? '|' : ''));
        if ($this->value !== null) {
            $paramName = \sprintf('%s__%s', $this->getRoot(), $this->property);
            if ($operator->isArray()) {
                if (\is_string($this->value)) {
                    $this->value = [$this->value];
                }
                $builder
                    ->andWhere(\sprintf('%s.%s %s(:%s)', $this->getRoot(), $this->property, $operator->getSqlOperator(), $paramName))
                    ->setParameter($paramName, $this->value);
            } else {
                if (\is_array($this->value)) {
                    $this->value = implode(' ', $this->value);
                }
                $builder
                    ->andWhere(\sprintf('%s.%s %s :%s', $this->getRoot(), $this->property, $operator->getSqlOperator(), $paramName))
                    ->setParameter($paramName, $operator->getSqlValue($this->value));
            }
        }
    }
}
