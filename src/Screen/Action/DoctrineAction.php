<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Saldanhakun\TablerBundle\Screen\Element\Element;
use Saldanhakun\TablerBundle\Screen\Filter\BaseFilter;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Environment;

abstract class DoctrineAction extends AbstractAction
{
    private ?EntityRepository $repository = null;
    private ?QueryBuilder $builder = null;
    private array $filters = [];
    private ?Element $emptyAlert = null;
    private ?Element $filterControl = null;

    public function __construct(RequestStack $requestStack, Environment $twig, private readonly EntityManagerInterface $entityManager)
    {
        parent::__construct($requestStack, $twig);
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->entityManager;
    }

    public function getEmptyAlert(): ?Element
    {
        return $this->emptyAlert;
    }

    public function setEmptyAlert(?Element $emptyAlert): self
    {
        $this->emptyAlert = $emptyAlert;

        return $this;
    }

    public function getFilterControl(): ?Element
    {
        return $this->filterControl;
    }

    public function setFilterControl(?Element $filterControl): self
    {
        $this->filterControl = $filterControl;

        return $this;
    }

    public function pushFilter(BaseFilter $filter): self
    {
        $this->filters[] = $filter;

        return $this;
    }

    public function popFilter(): BaseFilter
    {
        return array_pop($this->filters);
    }

    public function countFilters(): int
    {
        return \count($this->filters);
    }

    /** @var BaseFilter[] */
    public function getFilters(): array
    {
        return $this->filters;
    }

    /** @var BaseFilter[] */
    public function getActiveFilters(): array
    {
        return array_filter($this->filters, function (BaseFilter $filter) { return $filter->getIsActive(); });
    }

    public function getQueryBuilder(): ?QueryBuilder
    {
        return $this->builder;
    }

    public function setQueryBuilder(?QueryBuilder $builder): self
    {
        $this->builder = $builder;

        return $this;
    }

    public function getRepository(): ?EntityRepository
    {
        return $this->repository;
    }

    public function setRepository(?EntityRepository $repository): self
    {
        $this->repository = $repository;

        return $this;
    }

    protected function preExecute(): void
    {
        parent::preExecute();
        if ($this->builder === null) {
            $this->builder = $this->repository->createQueryBuilder('r');
        }
        foreach ($this->filters as $filter) {
            $filter->apply($this->builder, $this->_params, $this->getRequestStack()->getCurrentRequest());
        }
    }
}
