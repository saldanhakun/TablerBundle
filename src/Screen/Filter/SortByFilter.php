<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Filter;

use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;

class SortByFilter extends BaseFilter
{
    public const Order ASC = Order::Ascending;
    public const Order DESC = Order::Descending;
    private ?Order $direction = null;
    private string $property = 'createdAt';
    private bool $resetSorting = false;

    public function getDirection(): ?Order
    {
        return $this->direction;
    }

    public function setDirection(?Order $direction): self
    {
        $this->direction = $direction;

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

    public function isResetSorting(): bool
    {
        return $this->resetSorting;
    }

    public function setResetSorting(bool $resetSorting): self
    {
        $this->resetSorting = $resetSorting;

        return $this;
    }

    public function apply(QueryBuilder $builder, array &$params, Request $request): void
    {
        if ($this->direction === null) {
            $flag = null;
        } else {
            $flag = $this->direction === self::ASC;
        }
        $flag = $this->boolFromRequest($request, $flag);

        if ($flag !== null) {
            $this->direction = $flag ? self::ASC : self::DESC;
            if ($this->resetSorting) {
                $builder->orderBy(\sprintf('%s.%s', $this->getRoot(), $this->property), $this->direction->value);
            } else {
                $builder->addOrderBy(\sprintf('%s.%s', $this->getRoot(), $this->property), $this->direction->value);
            }
        } else {
            $this->direction = null;
        }

        $this->forTemplate($params, $flag);
    }
}
