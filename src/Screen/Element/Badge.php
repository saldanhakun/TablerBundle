<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\BadgeFormat;
use KevinPapst\TablerBundle\Enum\BadgePosition;
use KevinPapst\TablerBundle\Enum\ButtonSize;

class Badge extends Element
{
    use UiColorableTrait;

    private string $size = ButtonSize::SMALL;
    private string $format = BadgeFormat::BASIC;
    private string $position = BadgePosition::AFTER;
    private Icon $icon;
    private Tooltip $tooltip;
    private bool $blink = true;

    public const array ACCEPTED_TAGS = [
        'div',
        'span',
    ];

    public function __construct(Element|string $content, array $attributes = [])
    {
        parent::__construct('span', $content, $attributes);
        $this->icon = new Icon('');
        $this->tooltip = new Tooltip('');
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getIcon(): Icon
    {
        return $this->icon;
    }

    public function getTooltip(): Tooltip
    {
        return $this->tooltip;
    }

    public function getIsEnabled(): bool
    {
        return parent::getIsEnabled() && ($this->position === BadgePosition::DOT || !empty($this->getContent()));
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this
            ->addClass('badge')
            ->addClass("badge-{$this->size}");
        switch ($this->format) {
            case BadgeFormat::OUTLINE:
                $this->addClass('badge-outline', "text-{$this->color}");
                break;
            case BadgeFormat::BASIC:
                $this->addClass("bg-{$this->color}", "text-{$this->color}-fg");
                break;
            case BadgeFormat::LIGHT:
                $this->addClass("bg-{$this->color}-lt");
                break;
        }
        switch ($this->position) {
            case BadgePosition::AFTER: break;
            case BadgePosition::NOTIFICATION:
                $this->addClass('badge-notification');
                break;
            case BadgePosition::DOT:
                $this->addClass('badge-dot', 'badge-notification');
                if ($this->blink) {
                    $this->addClass('badge-blink');
                }
                break;
        }
    }

    protected function renderContent(): string
    {
        $this->tooltip->applyTo($this);
        return $this->icon->renderWithIcon(parent::renderContent());
    }

    public function render(): string
    {
        if ($this->getIsEnabled()) {
            return parent::render();
        }
        return '';
    }
}
