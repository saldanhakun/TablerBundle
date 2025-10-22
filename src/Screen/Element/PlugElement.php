<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Screen\Plug\AbstractPlug;

class PlugElement extends Element
{

    public function __construct(protected AbstractPlug $plug)
    {
        parent::__construct('div', '', []);
    }

    public function getPlug(): AbstractPlug
    {
        return $this->plug;
    }

    public function setPlug(AbstractPlug $plug): self
    {
        $this->plug = $plug;
        return $this;
    }

    public function render(): string
    {
        $this->plug->render();
        return $this->plug->getRendered();
    }
}
