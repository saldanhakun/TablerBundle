<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Screen\Plug\AbstractPlug;

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
