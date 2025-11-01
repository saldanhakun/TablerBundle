<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Filter;

use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseFilter
{
    private string $root = 'r';
    protected bool $isActive = false;

    public function __construct(private readonly string $name)
    {
    }

    public function getIsActive(): bool
    {
        return $this->isActive;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getRoot(): string
    {
        return $this->root;
    }

    public function setRoot(string $root): self
    {
        $this->root = $root;

        return $this;
    }

    protected function fromRequest(Request $request, array|string|null $default, string $listSeparator = ''): array|string|null
    {
        if ($request->query->has($this->name)) {
            $str = html_entity_decode($request->query->get($this->name));
            if (!empty($str)) {
                if (empty($listSeparator)) {
                    // Não suporta listas, ou vai tratar a parte (ex: json)
                    return $str;
                }

                return explode($listSeparator, $str);
            }
        }

        return $default;
    }

    protected function forTemplate(array &$params, string $value): void
    {
        if (!\array_key_exists('filters', $params)) {
            $params['filters'] = [];
        }
        if (empty($value)) {
            if (\array_key_exists('filters', $params)) {
                unset($params['filters'][$this->name]);
            }
        } else {
            $params['filters'][$this->name] = htmlentities($value);
        }
    }

    protected function boolFromRequest(Request $request, ?bool $default): ?bool
    {
        $strDefault = $default ? '1' : '0';
        $str = $this->fromRequest($request, $default !== null ? $strDefault : null);
        if ($str === null || empty(trim($str))) {
            return $default;
        }

        return \in_array(trim($str), ['1', 'y', 'Y', 'yes', 'YES', 'Yes', 'on', 's', 'S', 'sim', 'SIM', 'Sim']);
    }

    protected function numberFromRequest(Request $request, float|int|null $default, int $precision = 10, int $decimals = 2): float|int|null
    {
        if (\is_float($default)) {
            $strDefault = \sprintf("%$precision.{$decimals}f", $default);
        } elseif (\is_int($default)) {
            $strDefault = \strval($default);
        } else {
            $strDefault = null;
        }

        $str = $this->fromRequest($request, $strDefault);

        if ($str === null || empty(trim($str)) || !is_numeric(trim($str))) {
            return $default;
        }
        if (!str_contains($str, '.')) {
            return \intval($str);
        } else {
            return \floatval($str);
        }
    }

    abstract public function apply(QueryBuilder $builder, array &$params, Request $request): void;
}
