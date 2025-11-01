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

class TextColor extends BaseEnum
{
    public const string PRIMARY = 'primary';
    public const string SECONDARY = 'secondary';
    public const string BODY = 'body';
    public const string SUCCESS = 'success';
    public const string INFO = 'info';
    public const string WARNING = 'warning';
    public const string DANGER = 'danger';
    public const string BLUE = 'blue';
    public const string AZURE = 'azure';
    public const string INDIGO = 'indigo';
    public const string PURPLE = 'purple';
    public const string PINK = 'pink';
    public const string RED = 'red';
    public const string ORANGE = 'orange';
    public const string YELLOW = 'yellow';
    public const string LIME = 'lime';
    public const string GREEN = 'green';
    public const string TEAL = 'teal';
    public const string CYAN = 'cyan';
    public const string DARK = 'dark';
    public const string LIGHT = 'light';

    public const array OPTIONS = [
        self::PRIMARY => 'Primária',
        self::SECONDARY => 'Secundária',
        self::BODY => 'Corpo da Página',
        self::SUCCESS => 'Sucesso',
        self::INFO => 'Informação',
        self::WARNING => 'Aviso',
        self::DANGER => 'Perigo',
        self::BLUE => 'Azul',
        self::AZURE => 'Azul Claro',
        self::INDIGO => 'Azul Escuro',
        self::PURPLE => 'Roxo',
        self::PINK => 'Rosa',
        self::RED => 'Vermelho',
        self::ORANGE => 'Laranja',
        self::YELLOW => 'Amarelo',
        self::LIME => 'Verde Limão',
        self::GREEN => 'Verde',
        self::TEAL => 'Verde-azulado',
        self::CYAN => 'Ciano',
        self::DARK => 'Escuro',
        self::LIGHT => 'Claro',
    ];
}
