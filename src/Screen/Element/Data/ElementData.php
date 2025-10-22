<?php

namespace KevinPapst\TablerBundle\Screen\Element\Data;

abstract class ElementData
{
    abstract public function render(): string;

    public function __toString(): string
    {
        return $this->render();
    }
}
