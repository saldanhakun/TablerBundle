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

class NullFilter extends BaseFilter
{
    private bool $isNull = false;
    private string $property = 'id';

    public function getIsNull(): bool
    {
        return $this->isNull;
    }

    public function setIsNull(bool $isNull): self
    {
        $this->isNull = $isNull;

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

    public function apply(QueryBuilder $builder, array &$params, Request $request): void
    {
        $this->isNull = $this->boolFromRequest($request, $this->isNull);
        $builder
            ->andWhere(\sprintf('%s.%s %s NULL', $this->getRoot(), $this->property, $this->isNull ? 'IS' : 'IS NOT'));
        $this->forTemplate($params, $this->isNull);
    }
}
