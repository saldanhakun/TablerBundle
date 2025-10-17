<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Action\Edit;

use KevinPapst\TablerBundle\Screen\Action\BaseFormAction;

class CreateAction extends BaseFormAction
{
    protected function getIsRequired(): bool
    {
        return false;
    }

    protected function getAllowNewRecord(): bool
    {
        return true;
    }

    public function getTemplate(): string
    {
        return '@TablerBundle/crud/new.html.twig';
    }

    public function getTitle(): string
    {
        if ($this->getDescriber()) {
            return 'Cadastro ' . $this->getDescriber()->getOf(false);
        } else {
            return 'Cadastro';
        }
    }
}
