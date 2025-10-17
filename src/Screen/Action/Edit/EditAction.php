<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Action\Edit;

use KevinPapst\TablerBundle\Screen\Action\BaseFormAction;

class EditAction extends BaseFormAction
{
    protected function getIsRequired(): bool
    {
        return true;
    }

    protected function getAllowNewRecord(): bool
    {
        return false;
    }

    public function getTemplate(): string
    {
        return '@TablerBundle/crud/edit.html.twig';
    }

    public function getTitle(): string
    {
        if ($this->getDescriber()) {
            return 'Edição ' . $this->getDescriber()->getOf(false);
        } else {
            return 'Atualização';
        }
    }
}
