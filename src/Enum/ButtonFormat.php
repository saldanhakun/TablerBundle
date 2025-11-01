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

class ButtonFormat extends BaseEnum
{
    public const string STANDARD = 'btn';
    public const string OUTLINE = 'btn btn-outline';
    public const string GHOST = 'btn btn-ghost';
    public const string SQUARE = 'btn btn-square';
    public const string PILL = 'btn btn-pill';

    public const array OPTIONS = [
        self::STANDARD => 'Arredondado',
        self::OUTLINE => 'Contorno',
        self::GHOST => 'Invisível',
        self::SQUARE => 'Reto',
        self::PILL => 'Curvo',
    ];
}
