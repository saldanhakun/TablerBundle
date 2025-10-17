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

class BoolFlagFilter extends BaseFilter
{
    private ?bool $flag = null;
    private string $property = 'isActive';

    public function getFlag(): ?bool
    {
        return $this->flag;
    }

    public function setFlag(?bool $flag): self
    {
        $this->flag = $flag;

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
        $this->flag = $this->boolFromRequest($request, $this->flag);
        if ($this->flag !== null) {
            $flagName = \sprintf('%s__%s', $this->getRoot(), $this->property);
            $builder
                ->andWhere(\sprintf('%s.%s = :%s', $this->getRoot(), $this->property, $flagName))
                ->setParameter($flagName, $this->flag);
        }
        $this->forTemplate($params, $this->flag);
    }
}
