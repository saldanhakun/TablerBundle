<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Column;

class BooleanColumn extends PropertyColumn
{
    protected const string DEFAULT_EMPTY = self::EMPTY_DASH;
    public const string EMPTY_EMPTY = '';
    public const string EMPTY_SPACE = '&nbsp;';
    public const string EMPTY_DASH = '&ndash;';
    public const string EMPTY_BAN = '<i class="fa fa-ban"></i>';

    public const array YES_NO = [
        self::ARRAY_NULL => self::DEFAULT_EMPTY,
        self::ARRAY_FALSE => 'Não',
        self::ARRAY_TRUE => 'Sim',
    ];
    public const array ON_OFF = [
        self::ARRAY_NULL => self::DEFAULT_EMPTY,
        self::ARRAY_FALSE => 'Desligado',
        self::ARRAY_TRUE => 'Ligado',
        self::ARRAY_FEMALE => [
            self::ARRAY_NULL => self::DEFAULT_EMPTY,
            self::ARRAY_FALSE => 'Desligada',
            self::ARRAY_TRUE => 'Ligada',
        ],
    ];
    public const array ENABLED_DISABLED = [
        self::ARRAY_NULL => self::DEFAULT_EMPTY,
        self::ARRAY_FALSE => 'Desabilitado',
        self::ARRAY_TRUE => 'Habilitado',
        self::ARRAY_FEMALE => [
            self::ARRAY_NULL => self::DEFAULT_EMPTY,
            self::ARRAY_FALSE => 'Desabilitada',
            self::ARRAY_TRUE => 'Habilitada',
        ],
    ];
    public const array ACTIVE_INACTIVE = [
        self::ARRAY_NULL => self::DEFAULT_EMPTY,
        self::ARRAY_FALSE => 'Inativo',
        self::ARRAY_TRUE => 'Ativo',
        self::ARRAY_FEMALE => [
            self::ARRAY_NULL => self::DEFAULT_EMPTY,
            self::ARRAY_FALSE => 'Inativa',
            self::ARRAY_TRUE => 'Ativa',
        ],
    ];
    public const array COLOR_GREEN_RED_MUTED = [
        self::ARRAY_NULL => '<span class="text-muted">%s</span>',
        self::ARRAY_FALSE => '<span class="text-red">%s</span>',
        self::ARRAY_TRUE => '<span class="text-green">%s</span>',
    ];
    public const array COLOR_BLUE_BLACK_MUTED = [
        self::ARRAY_NULL => '<span class="text-muted">%s</span>',
        self::ARRAY_FALSE => '<span class="text-black">%s</span>',
        self::ARRAY_TRUE => '<span class="text-blue">%s</span>',
    ];
    public const array ICONS_CHECK_TIMES_QUESTION = [
        self::ARRAY_NULL => '<i class="fa fa-question"></i>',
        self::ARRAY_FALSE => '<i class="fa fa-times"></i>',
        self::ARRAY_TRUE => '<i class="fa fa-check"></i>',
    ];
    public const array ICONS_TOGGLERS = [
        self::ARRAY_NULL => '',
        self::ARRAY_FALSE => '<i class="fa fa-toggle-off"></i>',
        self::ARRAY_TRUE => '<i class="fa fa-toggle-on"></i>',
    ];
    public const array ICONS_TOGGLERS_VERTICAL = [
        self::ARRAY_NULL => '',
        self::ARRAY_FALSE => '<i class="fa fa-toggle-left"></i>',
        self::ARRAY_TRUE => '<i class="fa fa-toggle-right"></i>',
    ];
    public const array ICONS_THUMBS = [
        self::ARRAY_NULL => '',
        self::ARRAY_FALSE => '<i class="fa fa-thumbs-o-down"></i>',
        self::ARRAY_TRUE => '<i class="fa fa-thumbs-o-up"></i>',
    ];

    public const int ARRAY_NULL = 0;
    public const int ARRAY_FALSE = -1;
    public const int ARRAY_TRUE = 1;
    public const string ARRAY_FEMALE = 'female';

    private array $labels = self::YES_NO;
    private bool $isFemale = false;

    protected function renderEmptyValue(): string
    {
        return $this->labels[self::ARRAY_NULL];
    }

    protected function renderBooleanValue(bool $value): string
    {
        return $this->labels[$value ? self::ARRAY_TRUE : self::ARRAY_FALSE];
    }

    public function getIsFemale(): bool
    {
        return $this->isFemale;
    }

    public function setIsFemale(bool $isFemale): self
    {
        $this->isFemale = $isFemale;

        return $this;
    }

    protected function isValueEmpty(mixed $value): bool
    {
        return $value === null;
    }

    public function makeSet(string $true, string $false, string $null): array
    {
        return [
            self::ARRAY_NULL => $null,
            self::ARRAY_FALSE => $false,
            self::ARRAY_TRUE => $true
        ];
    }

    public function readSet(array $labelSet, bool $isFemale, ?string &$true, ?string &$false, ?string &$null): self
    {
        $set = $labelSet;
        if ($isFemale && \array_key_exists(self::ARRAY_FEMALE, $set)) {
            $set = $set[self::ARRAY_FEMALE];
        }
        if (\array_key_exists(self::ARRAY_TRUE, $set)) {
            $true = $set[self::ARRAY_TRUE];
        } elseif (\array_key_exists('true', $set)) {
            $true = $set['true'];
        } else {
            $true = '';
        }
        if (\array_key_exists(self::ARRAY_FALSE, $set)) {
            $false = $set[self::ARRAY_FALSE];
        } elseif (\array_key_exists('false', $set)) {
            $false = $set['false'];
        } else {
            $false = '';
        }
        if (\array_key_exists(self::ARRAY_NULL, $set)) {
            $null = $set[self::ARRAY_NULL];
        } elseif (\array_key_exists('null', $set)) {
            $null = $set['null'];
        } else {
            $null = '';
        }

        return $this;
    }

    public function getLabelSet(): array
    {
        return $this->labels;
    }

    public function setLabelSet(array $labels): self
    {
        $this->readSet($labels, $this->isFemale, $true, $false, $null);
        $this->labels = $this->makeSet($true, $false, $null);

        return $this;
    }

    public function getFalseLabel(): string
    {
        return $this->labels[self::ARRAY_FALSE];
    }

    public function getTrueLabel(): string
    {
        return $this->labels[self::ARRAY_TRUE];
    }

    public function getEmptyLabel(): string
    {
        return $this->labels[self::ARRAY_NULL];
    }

    public function setFalseLabel(string $label): self
    {
        $this->labels[self::ARRAY_FALSE] = $label;

        return $this;
    }

    public function setTrueLabel(string $label): self
    {
        $this->labels[self::ARRAY_TRUE] = $label;

        return $this;
    }

    public function setEmptyLabel(string $label): self
    {
        $this->labels[self::ARRAY_NULL] = $label;

        return $this;
    }

    protected function combineStrings(string $original, string $new): string
    {
        if (empty($new)) {
            return $original;
        }
        if (str_contains($new, '%s')) {
            return \sprintf($new, $original);
        }

        return $original . $new;
    }

    protected function combineSet(array $original, array $new): array
    {
        $this->readset($original, false, $originalTrue, $originalFalse, $originalNull);
        $this->readset($new, false, $true, $false, $null);

        return $this->makeSet(
            $this->combineStrings($originalTrue, $true),
            $this->combineStrings($originalFalse, $false),
            $this->combineStrings($originalNull, $null)
        );
    }

    public function combine(array ...$sets): array
    {
        $final = $this->makeSet('', '', '');
        $last = $final;
        foreach ($sets as $set) {
            $female = $final[self::ARRAY_FEMALE] ?? null;
            $final = $this->combineSet($final, $set);
            if ($female !== null || !empty($set[self::ARRAY_FEMALE])) {
                if ($female === null) {
                    $female = $last[self::ARRAY_FEMALE] ?? $last;
                }
                $final[self::ARRAY_FEMALE] = $this->combineSet($female ?? [], $set[self::ARRAY_FEMALE] ?? $set);
            }
            $last = $final;
        }

        return $final;
    }
}
