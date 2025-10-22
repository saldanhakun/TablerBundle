<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class TooltipPlacement extends BaseEnum
{

    public const string TOP = 'top';
    public const string RIGHT = 'right';
    public const string BOTTOM = 'bottom';
    public const string LEFT = 'left';

    public const array OPTIONS = [
        self::TOP => "Acima",
        self::BOTTOM => "Abaixo",
        self::LEFT => "Esquerda",
        self::RIGHT => "Direita",
    ];

}
