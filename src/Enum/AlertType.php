<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Enum;

use Saldanhakun\BrazilianValidators\Enum\Attribute\EnumIconTrait;
use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class AlertType extends BaseEnum
{
    use EnumIconTrait;

    public const string ERROR = 'danger';
    public const string WARNING = 'warning';
    public const string SUCCESS = 'success';
    public const string INFO = 'info';

    public const array OPTIONS = [
        self::ERROR => 'Erro',
        self::WARNING => 'Aviso',
        self::SUCCESS => 'Sucesso',
        self::INFO => 'Informação',
    ];

    public const array ICONS = [
        self::ERROR => 'fa fa-danger',
        self::WARNING => 'fa fa-exclamation-triangle',
        self::SUCCESS => 'fa fa-check',
        self::INFO => 'fa fa-information-triangle',
    ];
}
