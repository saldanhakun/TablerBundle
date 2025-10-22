<?php

namespace KevinPapst\TablerBundle\Screen\Element;

trait UiRoutableTrait
{

    private ?string $route=null;
    private array $routeParams=[];

    public function getRoute(): ?string
    {
        return $this->route;
    }

    public function setRoute(?string $route): self
    {
        $this->route = $route;
        return $this;
    }

    public function getRouteParams(): array
    {
        return $this->routeParams;
    }

    public function setRouteParams(array $routeParams): self
    {
        $this->routeParams = $routeParams;
        return $this;
    }

}
