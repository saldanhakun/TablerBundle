<?php

namespace Saldanhakun\TablerBundle\Enum;

enum FieldsetPlacementEnum: string
{
    case NONE = 'none';
    case LEFT = 'left';
    case RIGHT = 'right';

    public function getLabel(): string
    {
        return match($this) {
            self::NONE => "Nenhum",
            self::LEFT => "Coluna da Esquerda",
            self::RIGHT => "Coluna da Direita",
        };
    }

    public function isRight(): bool
    {
        return $this === self::RIGHT;
    }
}
