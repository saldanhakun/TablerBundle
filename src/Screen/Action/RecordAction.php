<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action;

use Symfony\Component\Uid\Ulid;

abstract class RecordAction extends DoctrineAction
{
    private ?object $record = null;

    public function getRecord(): ?object
    {
        return $this->record;
    }

    public function setRecord(?object $record): self
    {
        $this->record = $record;

        return $this;
    }

    protected function getIsRequired(): bool
    {
        return false;
    }

    protected function getAllowNewRecord(): bool
    {
        return false;
    }

    protected function validateRecord(): void
    {
        if ($this->record === null) {
            if ($this->getIsRequired()) {
                throw new \LogicException('Registro não atribuído');
            }

            return;
        }
        $id = $this->record->getId();
        if (empty($id)) {
            if (!$this->getAllowNewRecord()) {
                throw new \LogicException('Registro não pode ser novo');
            }

            return;
        }

        if ($id instanceof Ulid) {
            $this->getQueryBuilder()->andWhere('r.id = :id')->setParameter('id', $id->toBase32());
        } else {
            $this->getQueryBuilder()->andWhere('r.id = :id')->setParameter('id', $id);
        }
        $test = $this->getQueryBuilder()->getQuery()->getOneOrNullResult();
        if (empty($test)) {
            //throw new NotFoundHttpException("Registro não aceito");
        }
        $this->_params['record'] = $this->record;
    }

    protected function preExecute(): void
    {
        parent::preExecute();
        $this->validateRecord();
    }
}
