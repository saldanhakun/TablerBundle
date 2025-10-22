<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class BadgeFormat extends BaseEnum
{

    public const string BASIC = 'basic';
    public const string LIGHT = 'light';
    public const string OUTLINE = 'outline';

    public const array OPTIONS = [
        self::BASIC => "Básico",
        self::LIGHT => "Leve",
        self::OUTLINE => "Contorno",
    ];

}
