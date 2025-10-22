<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\ButtonSize;

class Card extends Element
{
    private ?ButtonSize $size=null;

    public function getSize(bool $asString=true): ButtonSize|string|null
    {
        return ButtonSize::instanceOrString($this->size, $asString);
    }

    public function setSize(ButtonSize|string|null $color): self
    {
        $this->size = ButtonSize::assertOrNull($color);
        return $this;
    }

    protected function renderContent(): string
    {
        return parent::renderContent();
    }

}
