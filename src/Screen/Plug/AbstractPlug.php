<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Plug;

use KevinPapst\TablerBundle\Screen\AbstractUi;

abstract class AbstractPlug extends AbstractUi
{
    protected string $rendered = '';

    protected function prepare(): void
    {
        $this->_params = array_merge(array_filter([
            'plug' => $this,
        ]), $this->getFixedParams());
    }

    abstract protected function process(): void;

    protected function wrap(): void
    {
        // nop
    }

    public function render(): self
    {
        $this->rendered = '';
        $this->prepare();
        $this->process();
        $this->wrap();

        return $this;
    }

    public function getRendered(): ?string
    {
        return $this->rendered;
    }

    public function __toString(): string
    {
        $this->render();
        return $this->getRendered();
    }
}
