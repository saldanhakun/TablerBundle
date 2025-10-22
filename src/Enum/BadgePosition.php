<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class BadgePosition extends BaseEnum
{

    public const string AFTER = 'after';
    public const string NOTIFICATION = 'notification';
    public const string DOT = 'dot';

    public const array OPTIONS = [
        self::AFTER => "Linha",
        self::NOTIFICATION => "Elevado",
        self::DOT => "Ponto de Atenção",
    ];

}
