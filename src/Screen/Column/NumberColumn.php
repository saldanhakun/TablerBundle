<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Column;

class NumberColumn extends PropertyColumn
{
    private ?string $negativeColor = null;
    private ?string $zeroColor = null;
    private ?string $positiveColor = null;
    private int $decimals = 2;
    private bool $decimalsSeparator = true;
    private bool $thousandsSeparator = true;
    private bool $zeroIsEmpty = false;
    private bool $alwaysDecimals = false;
    private string $emptyValue = '';
    private string $format = '';
    private string $_colorize = '';
    private ?string $currency = null;

    protected function colorize(?string $color): string
    {
        if (empty($color)) {
            return '';
        }
        if (str_contains('%s', $color)) {
            return $color;
        }
        if (preg_match('/^#(([0-9a-f]{3)([0-9a-f]{3)?)$/i', $color, $match)) {
            return \sprintf('<span style="color: #%s">%%s</span>', $match[1]);
        }
        if (preg_match('/^@([a-z]+)$/i', $color, $match)) {
            return \sprintf('<span style="color: %s">%%s</span>', $match[1]);
        }
        if (preg_match('/^([-a-z_0-9 ]+)$/i', $color, $match)) {
            return \sprintf('<span class="%s">%%s</span>', $match[1]);
        }
        throw new \LogicException("Cor inválida: $color");
    }

    protected function renderEmptyValue(): string
    {
        $this->_colorize = $this->colorize(null);

        return $this->emptyValue;
    }

    protected function renderIntegerValue(int $value): string
    {
        if ($value > 0) {
            $c = 1;
        } elseif ($value < 0) {
            $c = -1;
        } else {
            $c = 0;
        }
        $this->_colorize = $this->colorize([-1 => $this->negativeColor, 0 => $this->zeroColor, 1 => $this->positiveColor][$c]);

        return number_format($value, $this->alwaysDecimals ? $this->decimals : 0, $this->decimalsSeparator ? ',' : '', $this->thousandsSeparator ? '.' : '');
    }

    protected function renderFloatValue(float $value): string
    {
        if ($value > 0) {
            $c = 1;
        } elseif ($value < 0) {
            $c = -1;
        } else {
            $c = 0;
        }
        $this->_colorize = $this->colorize([-1 => $this->negativeColor, 0 => $this->zeroColor, 1 => $this->positiveColor][$c]);

        return number_format($value, $this->decimals, $this->decimalsSeparator ? ',' : '', $this->thousandsSeparator ? '.' : '');
    }

    protected function wrapContent(string $content): string
    {
        if (!empty($this->currency)) {
            $content = $this->currency . $content;
        }
        if (!empty($this->format)) {
            $content = \sprintf($this->format, $content);
        }
        if (!empty($this->colorize)) {
            $content = \sprintf($this->_colorize, $content);
        }

        return $content;
    }

    protected function isValueEmpty(mixed $value): bool
    {
        if ($value === null) {
            return true;
        }
        if ($this->zeroIsEmpty) {
            if (\is_int($value) && $value === 0) {
                return true;
            }
            if (\is_float($value) && $this->decimals === 0) {
                return \intval($value) === 0;
            }
            if (\is_float($value)) {
                return preg_replace('/[0]/', '', \sprintf("%0.{$this->decimals}f", $value)) !== '.';
            }
        }

        return false;
    }

    public function getNegativeColor(): ?string
    {
        return $this->negativeColor;
    }

    public function setNegativeColor(?string $negativeColor): self
    {
        $this->negativeColor = $negativeColor;

        return $this;
    }

    public function getZeroColor(): ?string
    {
        return $this->zeroColor;
    }

    public function setZeroColor(?string $zeroColor): self
    {
        $this->zeroColor = $zeroColor;

        return $this;
    }

    public function getPositiveColor(): ?string
    {
        return $this->positiveColor;
    }

    public function setPositiveColor(?string $positiveColor): self
    {
        $this->positiveColor = $positiveColor;

        return $this;
    }

    public function getDecimals(): int
    {
        return $this->decimals;
    }

    public function setDecimals(int $decimals): self
    {
        $this->decimals = $decimals;

        return $this;
    }

    public function isDecimalsSeparator(): bool
    {
        return $this->decimalsSeparator;
    }

    public function setDecimalsSeparator(bool $decimalsSeparator): self
    {
        $this->decimalsSeparator = $decimalsSeparator;

        return $this;
    }

    public function isThousandsSeparator(): bool
    {
        return $this->thousandsSeparator;
    }

    public function setThousandsSeparator(bool $thousandsSeparator): self
    {
        $this->thousandsSeparator = $thousandsSeparator;

        return $this;
    }

    public function isZeroIsEmpty(): bool
    {
        return $this->zeroIsEmpty;
    }

    public function setZeroIsEmpty(bool $zeroIsEmpty): self
    {
        $this->zeroIsEmpty = $zeroIsEmpty;

        return $this;
    }

    public function isAlwaysDecimals(): bool
    {
        return $this->alwaysDecimals;
    }

    public function setAlwaysDecimals(bool $alwaysDecimals): self
    {
        $this->alwaysDecimals = $alwaysDecimals;

        return $this;
    }

    public function getEmptyValue(): string
    {
        return $this->emptyValue;
    }

    public function setEmptyValue(string $emptyValue): self
    {
        $this->emptyValue = $emptyValue;

        return $this;
    }

    public function getFormat(): string
    {
        return $this->format;
    }

    public function setFormat(string $format): self
    {
        $this->format = $format;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(?string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }
}
