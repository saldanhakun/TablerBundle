<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

use Saldanhakun\BrazilianValidators\Enum\BaseEnum;

class EnumColumn extends PropertyColumn
{
    protected const string DEFAULT_EMPTY = self::EMPTY_DASH;
    public const string EMPTY_EMPTY = '';
    public const string EMPTY_SPACE = '&nbsp;';
    public const string EMPTY_DASH = '&ndash;';
    public const string EMPTY_BAN = '<i class="fa fa-ban"></i>';

    private ?string $enumClass = null;

    protected function renderContentValue(mixed $value): string
    {
        $value = parent::renderContentValue($value);
        if ($this->enumClass !== null) {
            return call_user_func([$this->enumClass, 'instance'], $value)->getName();
        }
        return $value;
    }

public function getEnumClass(): ?string
    {
        return $this->enumClass;
    }

    public function setEnumClass(?string $enumClass): self
    {
        if (!in_array(BaseEnum::class, class_parents($enumClass))) {
            throw new \InvalidArgumentException("$enumClass não é um Enum");
        }
        $this->enumClass = $enumClass;
        return $this;
    }

}
