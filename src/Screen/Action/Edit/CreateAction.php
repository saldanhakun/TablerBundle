<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action\Edit;

use Saldanhakun\TablerBundle\Screen\Action\BaseFormAction;

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
        return '@Tabler/crud/new.html.twig';
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
