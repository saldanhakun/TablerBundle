<?php

namespace KevinPapst\TablerBundle\Screen\Element\Data;

use KevinPapst\TablerBundle\Screen\Element\Element;

class SimpleElementData extends ElementData
{
    public function __construct(private Element|string $content)
    {
    }

    public function render(): string
    {
        return $this->content;
    }

}
