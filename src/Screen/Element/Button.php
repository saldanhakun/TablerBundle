<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\ButtonFormat;
use KevinPapst\TablerBundle\Enum\ButtonSize;

class Button extends Linkable
{
    use UiColorableTrait;
    private string $size = ButtonSize::SMALL;
    private string $format = ButtonFormat::STANDARD;
    private Icon $icon;
    private Tooltip $tooltip;

    public function __construct(Element|string $content, string $urlOrRoute, bool $button = false, array $attributes = [])
    {
        parent::__construct($content, $urlOrRoute, $button, $attributes);
        $this->icon = new Icon('');
        $this->tooltip = new Tooltip('');
    }

    public function getIcon(): Icon
    {
        return $this->icon;
    }

    public function getTooltip(): Tooltip
    {
        return $this->tooltip;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this
            ->addClass($this->format)
            ->addClass("btn-{$this->size}")
            ->addClass("btn-{$this->color}");

    }

    protected function renderContent(): string
    {
        $this->tooltip->applyTo($this);
        return $this->icon->renderWithIcon(parent::renderContent());
    }
}
