<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

use KevinPapst\TablerBundle\Twig\HtmlEscaper;

class DateTimeColumn extends PropertyColumn
{
    private string $emptyValue = '';
    private string $format = 'c';
    private string $fullFormat = 'c';
    private bool $relativeTime = false;
    private bool $cueFullDate = false;
    private string $_cue = '';

    protected function renderEmptyValue(): string
    {
        $this->_cue = '';

        return $this->emptyValue;
    }

    protected function renderDateTimeValue(\DateTimeInterface $value): string
    {
        $this->_cue = $this->cueFullDate ? $value->format($this->fullFormat) : '';
        if ($this->relativeTime) {
            throw new \LogicException('Tempo relativo ainda não implementado');
        } else {
            return $value->format($this->format);
        }
    }

    protected function wrapContent(string $content): string
    {
        $content = parent::wrapContent($content);
        if (!empty($this->_cue)) {
            $content = \sprintf('<span title="%s">%s</span>', HtmlEscaper::singleton()->safeAttribute($this->_cue), $content);
        }

        return $content;
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

    public function getFullFormat(): string
    {
        return $this->fullFormat;
    }

    public function setFullFormat(string $fullFormat): self
    {
        $this->fullFormat = $fullFormat;

        return $this;
    }

    public function isRelativeTime(): bool
    {
        return $this->relativeTime;
    }

    public function setRelativeTime(bool $relativeTime): self
    {
        $this->relativeTime = $relativeTime;

        return $this;
    }

    public function isCueFullDate(): bool
    {
        return $this->cueFullDate;
    }

    public function setCueFullDate(bool $cueFullDate): self
    {
        $this->cueFullDate = $cueFullDate;

        return $this;
    }
}
