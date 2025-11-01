<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element\Data;

use Saldanhakun\TablerBundle\Screen\Element\Element;

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
