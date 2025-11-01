<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Plug;

use Saldanhakun\TablerBundle\Screen\Element\Element;

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
