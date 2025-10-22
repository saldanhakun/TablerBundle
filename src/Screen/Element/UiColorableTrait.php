<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\TextColor;

trait UiColorableTrait
{

    private string $color = TextColor::PRIMARY;

    public function getColor(bool $asString=true): TextColor|string
    {
        return TextColor::instanceOrString($this->color, $asString);
    }

    public function setColor(TextColor|string $color): self
    {
        $this->color = TextColor::assert($color);
        return $this;
    }

}
