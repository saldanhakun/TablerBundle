<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class AlertCategory extends BaseEnum
{

    public const string BASIC = 'basic';
    public const string MINOR = 'minor';
    public const string IMPORTANT = 'important';

    public const array OPTIONS = [
        self::BASIC => "Básico",
        self::MINOR => "Suavizado",
        self::IMPORTANT => "Destacado",
    ];

}
