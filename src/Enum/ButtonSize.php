<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class ButtonSize extends BaseEnum
{

    public const string EXTRA_SMALL = 'xs';
    public const string SMALL = 'sm';
    public const string MEDIUM = 'md';
    public const string LARGE = 'lg';

    public const array OPTIONS = [
        self::EXTRA_SMALL => "Minúsculo",
        self::SMALL => "Pequeno",
        self::MEDIUM => "Médio",
        self::LARGE => "Grande",
    ];

}
