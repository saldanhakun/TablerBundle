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
use Symfony\Component\HttpFoundation\Request;

class DateTimeFilter extends BaseFilter
{
    public const string EXPR_NONE = '%s';
    public const string EXPR_YEAR = 'YEAR(%s)';
    public const string EXPR_MONTH = 'MONTH(%s)';
    public const string EXPR_DAY = 'DAY(%s)';
    public const string EXPR_DATE = 'DATEOF(%s)';
    public const string EXPR_TIME = 'TIMEOF(%s)';
    public const string EXPR_HOUR = 'HOUROF(%s)';
    public const string EXPR_MINUTE = 'MINUTEOF(%s)';

    public const string COMP_EQUALS = '=';
    public const string COMP_NOT_EQUALS = '!=';
    public const string COMP_GREATER = '>';
    public const string COMP__GREATER_OR_EQUALS = '>=';
    public const string COMP_LESS = '<';
    public const string COMP_LESS_OR_EQUALS = '<=';
    public const string COMP_BETWEEN = 'BETWEEN';
    public const string COMP_NOT_BETWEEN = 'NOT BETWEEN';

    private string $expression = self::EXPR_NONE;
    private string $property = 'createdAt';
    private string $comparison = self::COMP_EQUALS;
    private ?\DateTime $value = null;
    private ?\DateTime $secondValue = null;
    private string $valueFormat = 'Y-m-d H:i:s';
    private string $queryFormat = 'c';

    public function getExpression(): string
    {
        return $this->expression;
    }

    public function setExpression(bool $expression): self
    {
        $this->expression = $expression;

        return $this;
    }

    public function getComparison(): string
    {
        return $this->comparison;
    }

    public function setComparison(bool $comparison): self
    {
        $this->comparison = $comparison;

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

    public function getValue(): ?\DateTime
    {
        return $this->value;
    }

    public function setValue(?\DateTime $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getSecondValue(): ?\DateTime
    {
        return $this->secondValue;
    }

    public function setSecondValue(?\DateTime $secondValue): self
    {
        $this->secondValue = $secondValue;

        return $this;
    }

    public function getValueFormat(): string
    {
        return $this->valueFormat;
    }

    public function setValueFormat(string $valueFormat): self
    {
        $this->valueFormat = $valueFormat;

        return $this;
    }

    public function getQueryFormat(): string
    {
        return $this->queryFormat;
    }

    public function setQueryFormat(string $queryFormat): self
    {
        $this->queryFormat = $queryFormat;

        return $this;
    }

    protected function format(?\DateTime $value): string
    {
        if ($value === null) {
            return 'NULL';
        }
        $str = $value->format($this->valueFormat);

        return \sprintf("'%s'", str_replace("'", "\\'", $str));
    }

    public function apply(QueryBuilder $builder, array &$params, Request $request): void
    {
        $isBetween = \in_array($this->comparison, [self::COMP_BETWEEN, self::COMP_NOT_BETWEEN]);
        $valueSet = $this->value?->format($this->queryFormat);
        if ($isBetween) {
            $valueSet .= ',';
            $valueSet .= $this->secondValue?->format($this->queryFormat);
        }
        $valueSet = $this->fromRequest($request, $valueSet);
        if ($isBetween) {
            list($start, $end) = explode(',', $valueSet);
            $this->value = empty($start) ? null : \DateTime::createFromFormat($this->queryFormat, $start);
            $this->secondValue = empty($end) ? null : \DateTime::createFromFormat($this->queryFormat, $end);
        } else {
            $this->value = empty($valueSet) ? null : \DateTime::createFromFormat($this->queryFormat, $valueSet);
            $this->secondValue = null;
        }

        $leftSide = \sprintf($this->expression, \sprintf('%s.%s', $this->getRoot(), $this->property));
        if (\in_array($this->comparison, [self::COMP_BETWEEN, self::COMP_NOT_BETWEEN])) {
            $builder->andWhere(\sprintf('%s %s %s AND %s', $leftSide, $this->getComparison(), $this->format($this->value), $this->format($this->secondValue)));
        } else {
            $builder->andWhere(\sprintf('%s %s %s', $leftSide, $this->getComparison(), $this->format($this->value)));
        }
    }
}
