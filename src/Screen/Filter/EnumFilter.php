<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Filter;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class EnumFilter extends StringFilter
{
    public function __construct(string $name, private readonly string $enumClass)
    {
        parent::__construct($name);
    }

    public function getValue(): array|string|null
    {
        $value = parent::getValue();
        if (\is_array($value)) {
            return array_map(function ($item) {
                return \call_user_func([$this->enumClass, 'assert'], $item);
            }, $value);
        }

        return \call_user_func([$this->enumClass, 'assertOrNull'], $value);
    }

    public function getInstance(): BaseEnum|array|null
    {
        $value = parent::getValue();
        if (\is_array($value)) {
            return array_map(function ($item) {
                return \call_user_func([$this->enumClass, 'instance'], $item);
            }, $value);
        }
        if (!empty($value)) {
            return \call_user_func([$this->enumClass, 'instance'], $value);
        }

        return null;
    }

    public function setValue(array|string|null $value): self
    {
        if (\is_array($value)) {
            $clean = array_map(function ($item) {
                return \call_user_func([$this->enumClass, 'assert'], $item);
            }, $value);
        } else {
            $clean = \call_user_func([$this->enumClass, 'assertOrNull'], $value);
        }

        return parent::setValue($clean);
    }
}
