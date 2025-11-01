<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Twig;

use function Symfony\Component\String\u;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TechnicalExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('base64', [$this, 'getBase64']),
            new TwigFilter('json_pick', [$this, 'getJsonPick']),
            new TwigFilter('json_pretty', [$this, 'getJsonPretty']),
            new TwigFilter('camel', [$this, 'getCamelCase']),
            new TwigFilter('add_class', [$this, 'getAddClass']),
            new TwigFilter('remove_class', [$this, 'getRemoveClass']),
            new TwigFilter('rgba', [$this, 'getRGBA']),
        ];
    }

    public function getBase64($text): string
    {
        return base64_encode($text);
    }

    public function getJsonPick($options, $value, $default = ''): string
    {
        if (empty($options) || empty($value)) {
            return $default;
        }
        if (\is_string($options)) {
            if (strpos($options, 'json-pick:') === 0) {
                $options = substr($options, \strlen('json-pick:'));
            }
            $options = json_decode($options, true);
        }
        if (\array_key_exists($value, $options)) {
            return $options[$value];
        }

        return $default;
    }

    public function getJsonPretty($value): string
    {
        if (\is_string($value)) {
            $value = json_decode($value, true);
        }

        return json_encode($value, JSON_PRETTY_PRINT);
    }

    public function getCamelCase($value): string
    {
        return u($value)->camel();
    }

    protected function normalizeClasses($value): array
    {
        if (\is_array($value)) {
            return $value;
        } elseif (\is_string($value)) {
            return explode(' ', $value);
        } else {
            return [];
        }
    }

    public function getAddClass($current, $class): string
    {
        return implode(' ', array_unique(array_filter(array_merge(
            $this->normalizeClasses($current),
            $this->normalizeClasses($class)
        ))));
    }

    public function getRemoveClass($current, $class): string
    {
        return implode(' ', array_unique(array_filter(array_diff(
            $this->normalizeClasses($current),
            $this->normalizeClasses($class)
        ))));
    }

    public function getRGBA($value, $alpha = 0): string
    {
        return self::rgba($value, $alpha);
    }

    public static function rgba($value, $alpha = 0): string
    {
        if (empty($value) || !preg_match('/^#[0-9a-f]{6}([0-9a-f]{2})?$/i', $value)) {
            return \sprintf('rgba(%d,%d,%d,0)', 0, 0, 0);
        }
        if (\strlen($value) > 7) {
            list($r, $g, $b) = sscanf(strtolower($value), '#%02x%02x%02x');
        } else {
            list($r, $g, $b, $alpha) = sscanf(strtolower($value), '#%02x%02x%02x%02x');
        }

        return \sprintf('rgba(%d,%d,%d,%d)', $r, $g, $b, $alpha);
    }
}
