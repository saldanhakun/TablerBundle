<?php

namespace KevinPapst\TablerBundle\Screen\Element;

class HtmlElement extends Element
{

    public function getId(): ?string
    {
        return $this->attr['id'] ?? null;
    }

    public function setId(?string $id, bool $removeIfNull=true): self
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

    public function setData(string $name, mixed $value, bool $removeIfNull=true): self
    {
        return $this->setData("data-$name", $value, $removeIfNull);
    }

    public function getAttr(string $name): mixed
    {
        return $this->attr[$name] ?? null;
    }

    public function setAttr(string $name, mixed $value, bool $removeIfNull=true): self
    {
        $this->attr[$name] = $value;
        if ($value === null && $removeIfNull) {
            unset($this->attr[$name]);
        }
        return $this;
    }
}
