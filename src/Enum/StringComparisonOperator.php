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

class StringComparisonOperator extends BaseEnum
{
    public const string EQUALS = 'e';
    public const string NOT_EQUALS = 'ne';
    public const string ONE_OF = 'in';
    public const string NONE_OF = 'ni';
    public const string CONTAINS = 'c';
    public const string NOT_CONTAINS = 'nc';
    public const string STARTS_WITH = 's';
    public const string NOT_STARTS_WITH = 'ns';
    public const string ENDS_WITH = 'ew';
    public const string NOT_ENDS_WITH = 'nw';

    public const array OPTIONS = [
        self::EQUALS => 'Igual a',
        self::NOT_EQUALS => 'Diferente de',
        self::ONE_OF => 'Está em',
        self::NONE_OF => 'Não está em',
        self::CONTAINS => 'Contém',
        self::NOT_CONTAINS => 'Não Contém',
        self::STARTS_WITH => 'Começa com',
        self::NOT_STARTS_WITH => 'Não começa com',
        self::ENDS_WITH => 'Termina com',
        self::NOT_ENDS_WITH => 'Não termina com',
    ];

    public function getSqlOperator(): string
    {
        return match ($this->getKey()) {
            self::EQUALS => '=',
            self::NOT_EQUALS => '<>',
            self::ONE_OF => 'IN',
            self::NONE_OF => 'NOT IN',
            self::CONTAINS => 'LIKE',
            self::NOT_CONTAINS => 'LIKE',
            self::STARTS_WITH => 'LIKE',
            self::NOT_STARTS_WITH => 'LIKE',
            self::ENDS_WITH => 'LIKE',
            self::NOT_ENDS_WITH => 'LIKE',
        };
    }

    public function getSqlValue(string $value): string
    {
        $format = match ($this->getKey()) {
            self::CONTAINS, self::NOT_CONTAINS => '%%%s%%',
            self::STARTS_WITH, self::NOT_STARTS_WITH => '%s%%',
            self::ENDS_WITH, self::NOT_ENDS_WITH => '%%%s',
            default => '%s',
        };
        $value = str_replace('_', '\\_', str_replace('%', '\\%', $value));

        return \sprintf($format, $value);
    }

    public function isArray(): bool
    {
        return \in_array($this->getKey(), [self::ONE_OF, self::NONE_OF]);
    }
}
