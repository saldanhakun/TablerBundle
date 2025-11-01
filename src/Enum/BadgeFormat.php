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

class BadgeFormat extends BaseEnum
{
    public const string BASIC = 'basic';
    public const string LIGHT = 'light';
    public const string OUTLINE = 'outline';

    public const array OPTIONS = [
        self::BASIC => 'Básico',
        self::LIGHT => 'Leve',
        self::OUTLINE => 'Contorno',
    ];
}
