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
