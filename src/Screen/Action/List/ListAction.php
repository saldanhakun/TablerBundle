<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action\List;

use Doctrine\ORM\EntityManagerInterface;
use Saldanhakun\DoctrineBundle\Describer\BaseDescriber;
use Saldanhakun\TablerBundle\Screen\Action\DoctrineAction;
use Saldanhakun\TablerBundle\Screen\Column\AbstractColumn;
use Saldanhakun\TablerBundle\Screen\Element\Alert;
use Saldanhakun\TablerBundle\Screen\Element\Data\DatasetData;
use Saldanhakun\TablerBundle\Screen\Element\Data\TableRowRecordData;
use Saldanhakun\TablerBundle\Screen\Element\Table;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use function Symfony\Component\String\u;
use Twig\Environment;

class ListAction extends DoctrineAction
{
    private Table $table;

    public function __construct(RequestStack $requestStack, Environment $twig, EntityManagerInterface $entityManager, private readonly UrlGeneratorInterface $urlGenerator)
    {
        parent::__construct($requestStack, $twig, $entityManager);
    }

    protected function configure(): void
    {
        parent::configure();
        $this->table = new Table(uniqid());
    }

    public function getTable(): Table
    {
        return $this->table;
    }

    public function setDescriber(?BaseDescriber $describer): self
    {
        $this->table->getColumns()->setDescriber($describer)->setTwig($this->getTwig());

        return parent::setDescriber($describer);
    }

    public function getUrlGenerator(): ?UrlGeneratorInterface
    {
        return $this->urlGenerator;
    }

    /** @return AbstractColumn[] */
    public function getColumns(): array
    {
        return $this->table->getColumns()->getColumns();
    }

    /** @return AbstractColumn[] */
    public function getEnabledColumns(): array
    {
        return $this->table->getColumns()->getEnabledColumns();
    }

    protected function preExecute(): void
    {
        parent::preExecute();
        $this->table->getColumns()
            ->setTwig($this->getTwig())
            ->setDescriber($this->getDescriber());
    }

    protected function run(): void
    {
        $this->_params['records'] = $this->getQueryBuilder()->getQuery()->getResult();
        $this->_params['is_empty'] = empty($this->_params['records']);
        if (!$this->_params['is_empty']) {
            $handler = new TableRowRecordData($this->getTable()->getColumns(), $this->getUrlGenerator());
            $data = new DatasetData($this->_params['records'], $handler);
            $this->table->setContent($data);
            $this->output = $this->table;
        } else {
            if ($this->getEmptyAlert()) {
                $this->output = $this->getEmptyAlert();
            } else {
                $male = $this->getDescriber()?->isMale();
                $this->output = new Alert(implode(' ', [
                    $male ? 'Nenhum' : 'Nenhuma',
                    ($this->getDescriber()?->getSingular()) ?? 'registro',
                    $male ? 'encontrado' : 'encontrada',
                ]));
            }
        }
    }

    public function getTemplate(): string
    {
        return '@Tabler/crud/table.html.twig';
    }

    public function getTitle(): string
    {
        if ($this->getDescriber()) {
            return 'Listagem ' . lcfirst(u($this->getDescriber()->getOf(true))->title(true));
        } else {
            return 'Listagem';
        }
    }

    public function getSubTitle(): string
    {
        $filters = $this->getActiveFilters();
        if (empty($filters)) {
            return '';
        }
        $filtered = '<span class="filtered-by">Filtrando por:</span>';
        foreach ($filters as $filter) {
            $filter->renderControl();
        }

        return \sprintf('<div class="filtered">%s</div>', $filtered);
    }
}
