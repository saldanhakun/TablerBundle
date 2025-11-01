<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Enum\TextColor;

trait UiColorableTrait
{
    private string $color = TextColor::PRIMARY;

    public function getColor(bool $asString = true): TextColor|string
    {
        return TextColor::instanceOrString($this->color, $asString);
    }

    public function setColor(TextColor|string $color): self
    {
        $this->color = TextColor::assert($color);

        return $this;
    }
}
