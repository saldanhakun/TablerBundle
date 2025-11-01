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

class BadgePosition extends BaseEnum
{
    public const string AFTER = 'after';
    public const string NOTIFICATION = 'notification';
    public const string DOT = 'dot';

    public const array OPTIONS = [
        self::AFTER => 'Linha',
        self::NOTIFICATION => 'Elevado',
        self::DOT => 'Ponto de Atenção',
    ];
}
