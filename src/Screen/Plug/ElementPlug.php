<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Plug;

use KevinPapst\TablerBundle\Screen\Element\Element;

class ElementPlug extends AbstractPlug
{
    private ?Element $element = null;
    private ?Element $wrapper = null;

    public function getElement(): ?Element
    {
        return $this->element;
    }

    public function setElement(?Element $element): self
    {
        $this->element = $element;
        return $this;
    }

    public function getWrapper(): ?Element
    {
        return $this->wrapper;
    }

    public function setWrapper(?Element $wrapper): self
    {
        $this->wrapper = $wrapper;
        return $this;
    }

    protected function process(): void
    {
        if ($this->element) {
            $this->rendered = $this->element->render();
        }
    }

    protected function wrap(): void
    {
        if ($this->wrapper) {
            $this->rendered = $this->wrapper->setContent($this->rendered)->render();
        }
    }

    public function getTemplate(): string
    {
        return '';
    }

}
