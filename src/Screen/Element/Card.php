<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Enum\ButtonSize;

class Card extends Element
{
    private ?ButtonSize $size = null;

    public function getSize(bool $asString = true): ButtonSize|string|null
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
