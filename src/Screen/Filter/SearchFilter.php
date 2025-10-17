<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Filter;

use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;

class SearchFilter extends BaseFilter
{
    public const string SEARCH_EXACT = 'EXACT';
    public const string SEARCH_ALL = 'ALL';
    public const string SEARCH_ANY = 'ANY';
    public const string SEARCH_CONTAINS = 'PARTIAL';
    public const string SEARCH_STARTS_WITH = 'BEGINS';
    public const string SEARCH_ENDS_WITH = 'ENDS';
    public const string SEARCH_LIKE = 'LIKE';
    public const string SEARCH_UNLIKE = 'UNLIKE';
    public const string SEARCH_REGULAR_EXPRESSION = 'REGEX';
    public const string SEARCH_NOT_REGULAR_EXPRESSION = 'NOT_REGEX';

    private string $algorithm = self::SEARCH_CONTAINS;
    private array $properties = [];
    private string $value = '';

    public function getAlgorithm(): string
    {
        return $this->algorithm;
    }

    public function setAlgorithm(bool $algorithm): self
    {
        $this->algorithm = $algorithm;

        return $this;
    }

    public function getProperties(): array
    {
        return $this->properties;
    }

    public function setProperties(array $properties): self
    {
        $this->properties = $properties;

        return $this;
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    protected function safe(string $value, bool $escapeLike): string
    {
        if ($escapeLike) {
            $value = str_replace('%', '\\%', str_replace('_', '\\_', $value));
        }

        return \sprintf("'%s'", str_replace("'", "\\'", $value));
    }

    public function apply(QueryBuilder $builder, array &$params, Request $request): void
    {
        if (!empty($this->properties) && !empty(trim($this->value))) {
            $clauses = $builder->expr()->orX();
            foreach ($this->properties as $property) {
                $leftSide = $this->getLeftSide($property);
                switch ($this->algorithm) {
                    case self::SEARCH_LIKE:
                        $clauses->add($builder->expr()->like($leftSide, $this->safe($this->value, false)));
                        break;
                    case self::SEARCH_UNLIKE:
                        $clauses->add($builder->expr()->notLike($leftSide, $this->safe($this->value, false)));
                        break;
                    case self::SEARCH_REGULAR_EXPRESSION:
                        $clauses->add(str_replace("$leftSide LIKE ", "$leftSide RLIKE", $builder->expr()->like($leftSide, $this->safe($this->value, false))));
                        break;
                    case self::SEARCH_NOT_REGULAR_EXPRESSION:
                        $clauses->add(str_replace("$leftSide NOT LIKE ", "$leftSide NOT RLIKE", $builder->expr()->notLike($leftSide, $this->safe($this->value, false))));
                        break;
                    case self::SEARCH_EXACT:
                        $clauses->add($builder->expr()->eq($leftSide, $this->safe($this->value, true)));
                        break;
                    case self::SEARCH_CONTAINS:
                        $clauses->add($builder->expr()->like($leftSide, \sprintf('%%%s%%', $this->safe($this->value, true))));
                        break;
                    case self::SEARCH_STARTS_WITH:
                        $clauses->add($builder->expr()->like($leftSide, \sprintf('%s%%', $this->safe($this->value, true))));
                        break;
                    case self::SEARCH_ENDS_WITH:
                        $clauses->add($builder->expr()->like($leftSide, \sprintf('%%%s', $this->safe($this->value, true))));
                        break;
                    case self::SEARCH_ALL:
                    case self::SEARCH_ANY:
                        if ($this->algorithm === self::SEARCH_ALL) {
                            $tokens = $builder->expr()->andX();
                        } else {
                            $tokens = $builder->expr()->orX();
                        }
                        $terms = array_unique(array_filter(array_map('trim', explode(' ', $this->value))));
                        foreach ($terms as $term) {
                            $tokens->add($builder->expr()->like($leftSide, \sprintf('%%%s%%', $this->safe($term, true))));
                        }
                        $clauses->add($tokens);
                        break;
                }
            }
            $builder->andWhere($clauses);
        }
    }

    protected function getLeftSide(string $property): string
    {
        if (!str_contains($property, '.')) {
            return \sprintf('%s.%s', $this->getRoot(), $property);
        } else {
            return $property;
        }
    }
}
