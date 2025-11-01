<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class LinkTarget extends BaseEnum
{
    public const string NONE = '';
    public const string BLANK = '_blank';
    public const string PARENT = '_parent';
    public const string NEW = '_new';

    public const array OPTIONS = [
        self::NONE => 'Nenhum',
        self::BLANK => 'Nova aba/janela',
        self::PARENT => 'Ancestral',
        self::NEW => 'Nova Janela',
    ];
}
