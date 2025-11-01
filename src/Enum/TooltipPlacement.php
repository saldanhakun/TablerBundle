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

class TooltipPlacement extends BaseEnum
{
    public const string TOP = 'top';
    public const string RIGHT = 'right';
    public const string BOTTOM = 'bottom';
    public const string LEFT = 'left';

    public const array OPTIONS = [
        self::TOP => 'Acima',
        self::BOTTOM => 'Abaixo',
        self::LEFT => 'Esquerda',
        self::RIGHT => 'Direita',
    ];
}
