<?php

namespace KevinPapst\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class LinkTarget extends BaseEnum
{

    public const string NONE = '';
    public const string BLANK = '_blank';
    public const string PARENT = '_parent';
    public const string NEW = '_new';

    public const array OPTIONS = [
        self::NONE => "Nenhum",
        self::BLANK => "Nova aba/janela",
        self::PARENT => "Ancestral",
        self::NEW => "Nova Janela",
    ];

}
