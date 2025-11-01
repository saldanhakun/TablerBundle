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
