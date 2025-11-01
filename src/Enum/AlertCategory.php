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

class AlertCategory extends BaseEnum
{
    public const string BASIC = 'basic';
    public const string MINOR = 'minor';
    public const string IMPORTANT = 'important';

    public const array OPTIONS = [
        self::BASIC => 'Básico',
        self::MINOR => 'Suavizado',
        self::IMPORTANT => 'Destacado',
    ];
}
