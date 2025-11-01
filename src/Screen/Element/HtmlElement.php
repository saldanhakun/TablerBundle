<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

class HtmlElement extends Element
{
    public function getId(): ?string
    {
        return $this->attr['id'] ?? null;
    }

    public function setId(?string $id, bool $removeIfNull = true): self
    {
        $this->attr['id'] = $id;
        if ($id === null && $removeIfNull) {
            unset($this->attr['id']);
        }

        return $this;
    }

    public function getData(string $name): mixed
    {
        return $this->getAttr("data-$name");
    }

    public function setData(string $name, mixed $value, bool $removeIfNull = true): self
    {
        return $this->setData("data-$name", $value, $removeIfNull);
    }

    public function getAttr(string $name): mixed
    {
        return $this->attr[$name] ?? null;
    }

    public function setAttr(string $name, mixed $value, bool $removeIfNull = true): self
    {
        $this->attr[$name] = $value;
        if ($value === null && $removeIfNull) {
            unset($this->attr[$name]);
        }

        return $this;
    }
}
