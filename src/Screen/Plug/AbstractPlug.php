<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Plug;

use Saldanhakun\TablerBundle\Screen\AbstractUi;

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
