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

class ButtonSize extends BaseEnum
{
    public const string EXTRA_SMALL = 'xs';
    public const string SMALL = 'sm';
    public const string MEDIUM = 'md';
    public const string LARGE = 'lg';

    public const array OPTIONS = [
        self::EXTRA_SMALL => 'Minúsculo',
        self::SMALL => 'Pequeno',
        self::MEDIUM => 'Médio',
        self::LARGE => 'Grande',
    ];
}
