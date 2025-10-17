<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Action;

use KevinPapst\TablerBundle\Screen\Filter\BaseFilter;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\RequestStack;

abstract class DoctrineAction extends AbstractAction
{
    private ?EntityRepository $repository = null;
    private ?QueryBuilder $builder = null;
    private array $filters = [];

    public function __construct(RequestStack $requestStack, private readonly EntityManagerInterface $entityManager)
    {
        parent::__construct($requestStack);
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->entityManager;
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
        return array_filter($this->filters, function (BaseFilter $filter) { return $filter->isActive(); });
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
