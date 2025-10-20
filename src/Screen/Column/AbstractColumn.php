<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

use KevinPapst\TablerBundle\Twig\HtmlEscaper;

abstract class AbstractColumn
{
    private bool $isEnabled = true;
    private int $colSpan = 1;
    private int $rowSpan = 1;
    private array $headerAttributes = [];
    private array $footerAttributes = [];
    private array $cellAttributes = [];
    private ?string $label = null;
    private ?string $title = null;
    private ?string $comment = null;
    protected HtmlEscaper $escaper;

    public function __construct()
    {
        $this->escaper = HtmlEscaper::singleton();
        $this->configure();
    }

    protected function configure(): void
    {
        //nop
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(?string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function isEnabled(): bool
    {
        return $this->isEnabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->isEnabled = $enabled;

        return $this;
    }

    public function getColSpan(): int
    {
        return $this->colSpan;
    }

    public function setColSpan(int $colSpan): self
    {
        $this->colSpan = $colSpan;

        return $this;
    }

    public function getRowSpan(): int
    {
        return $this->rowSpan;
    }

    public function setRowSpan(int $rowSpan): self
    {
        $this->rowSpan = $rowSpan;

        return $this;
    }

    public function isLinkable(): bool
    {
        return false;
    }

    protected function setDefaultHeaderAttributes(array &$attributes): void
    {
        if ($this->colSpan != 1) {
            $attributes['colspan'] = $this->colSpan;
        }
        if (!empty($this->title)) {
            $attributes['title'] = $this->escaper->safeAttribute($this->title);
        }
    }

    protected function setDefaultFooterAttributes(array &$attributes): void
    {
        if ($this->colSpan != 1) {
            $attributes['colspan'] = $this->colSpan;
        }
        if (!empty($this->comment)) {
            $attributes['title'] = $this->escaper->safeAttribute($this->comment);
        }
    }

    protected function setDefaultCellAttributes(array &$attributes, object|array|null $record): void
    {
        if ($this->colSpan != 1) {
            $attributes['colspan'] = $this->colSpan;
        }
        if ($this->rowSpan != 1) {
            $attributes['rowspan'] = $this->rowSpan;
        }
    }

    public function getHeaderAttributes(): array
    {
        return $this->headerAttributes;
    }

    public function setHeaderAttributes(array $attributes): self
    {
        $this->headerAttributes = $attributes;

        return $this;
    }

    public function getFooterAttributes(): array
    {
        return $this->footerAttributes;
    }

    public function setFooterAttributes(array $attributes): self
    {
        $this->footerAttributes = $attributes;

        return $this;
    }

    public function getCellAttributes(): array
    {
        return $this->cellAttributes;
    }

    public function setCellAttributes(array $attributes): self
    {
        $this->cellAttributes = $attributes;

        return $this;
    }

    public function renderHeaderAttributes(): string
    {
        $attr = $this->headerAttributes;
        $this->setDefaultHeaderAttributes($attr);

        return $this->escaper->safeAttributeSet($attr);
    }

    public function renderFooterAttributes(): string
    {
        $attr = $this->footerAttributes;
        $this->setDefaultFooterAttributes($attr);

        return $this->escaper->safeAttributeSet($attr);
    }

    public function renderCellAttributes(object|array|null $record): string
    {
        $attr = $this->cellAttributes;
        $this->setDefaultCellAttributes($attr, $record);

        return $this->escaper->safeAttributeSet($attr);
    }

    protected function renderEmptyLabel(): string
    {
        return '&nbsp;';
    }

    public function renderLabel(): string
    {
        if (empty($this->label)) {
            return $this->renderEmptyLabel();
        }

        return $this->escaper->encode($this->label);
    }

    protected function isEmpty(object|array|null $record): bool
    {
        return empty($record);
    }

    abstract protected function renderContent(object|array $record): string;

    public function renderCell(object|array|null $record): string
    {
        if ($this->isEmpty($record)) {
            return $this->renderEmptyValue();
        }

        return $this->renderContent($record);
    }

    protected function renderEmptyValue(): string
    {
        return '';
    }

    protected function renderBooleanValue(bool $value): string
    {
        return $value ? $this->booleanTrue() : $this->booleanFalse();
    }

    protected function renderIntegerValue(int $value): string
    {
        return number_format($value, 0, '', $this->numberThousands());
    }

    protected function renderFloatValue(float $value): string
    {
        return number_format($value, $this->floatDecimals(), $this->floatSeparator(), $this->numberThousands());
    }

    protected function renderDateTimeValue(\DateTimeInterface $value): string
    {
        return $value->format($this->dateTimeFormat());
    }

    protected function renderCustomValue(mixed $value): string
    {
        throw new \LogicException('Não há como renderizar esse valor');
    }

    protected function dateTimeFormat(): string
    {
        return 'c';
    }

    protected function floatDecimals(): int
    {
        return 2;
    }

    protected function floatSeparator(): string
    {
        return ',';
    }

    protected function numberThousands(): string
    {
        return '';
    }

    protected function booleanFalse(): string
    {
        return 'false';
    }

    protected function booleanTrue(): string
    {
        return 'true';
    }

    protected function renderContentValue(mixed $value): string
    {
        if (\is_string($value) || $value instanceof \Stringable) {
            return $value;
        }
        if (\is_bool($value)) {
            return $this->renderBooleanValue($value);
        }
        if (\is_int($value)) {
            return $this->renderIntegerValue($value);
        }
        if (\is_float($value)) {
            return $this->renderFloatValue($value);
        }
        if ($value instanceof \DateTimeInterface) {
            return $this->renderDateTimeValue($value);
        }

        if (empty($value)) {
            return $this->renderEmptyValue();
        }
        return $this->renderCustomValue($value);
    }
}
