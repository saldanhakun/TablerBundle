<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\AlertCategory;
use KevinPapst\TablerBundle\Enum\AlertType;

class Alert extends Element
{
    use UiColorableTrait;

    private string $category = AlertCategory::BASIC;
    private string $type = AlertType::ERROR;
    private bool $dismissable = false;
    private ?string $title = null;
    private Linkable $action;
    private Icon $icon;


    public const array ACCEPTED_TAGS = [
        'div',
        'span',
    ];

    public function __construct(Element|string $content, array $attributes = [])
    {
        parent::__construct('span', $content, $attributes);
        $this->action = new Linkable('', '');
        $this->icon = new Icon('');
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getIcon(): Icon
    {
        return $this->icon;
    }

    public function getAction(): Linkable
    {
        return $this->action;
    }

    public function getCategory(bool $asString=true): AlertCategory|string
    {
        return AlertCategory::instanceOrString($this->category, $asString);
    }

    public function setCategory(AlertCategory|string $category): self
    {
        $this->category = AlertCategory::assert($category);
        return $this;
    }

    public function getType(bool $asString=true): AlertType|string
    {
        return AlertType::instanceOrString($this->type, $asString);
    }

    public function setType(AlertType|string $type): self
    {
        $this->type = AlertType::assert($type);
        return $this;
    }

    public function getDismissable(): bool
    {
        return $this->dismissable;
    }

    public function setDismissable(bool $dismissable): self
    {
        $this->dismissable = $dismissable;
        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;
        return $this;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $type = $this->getType(false);
        $this->addClass('alert', "alert-{$type->getKey()}");
        if ($this->category === AlertCategory::IMPORTANT) {
            $this->addClass('alert-important');
        }
        elseif ($this->category === AlertCategory::MINOR) {
            $this->addClass('alert-minor');
        }

        if ($this->getDismissable()) {
            $this->addClass('alert-dismissable');
        }
        $this->icon
            ->clearClasses()
            ->setIcon($type->getIcon())
            ->addClass('alert-icon');
        $this->action
            ->clearClasses()
            ->addClass('alert-action');
        $this->attr['role'] = 'alert';
    }

    protected function renderContent(): string
    {
        $html = sprintf('<div class="alert-icon">%s</div>', $this->icon->render());
        $description = parent::renderContent();
        $title = $this->title ?? $this->getType(false)->getName();
        if (empty($description)) {
            $html .= sprintf('<div>%s</div>', $title);
        }
        else {
            $html .= sprintf('<div><h4 class="alert-heading">%s</h4><div class="alert-description">%s</div></div>', $title, $description);
        }
        $html .= $this->action->render();
        if ($this->dismissable) {
            $html .= '<a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>';
        }
        return $html;
    }
}
