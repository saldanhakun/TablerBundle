<?php

namespace KevinPapst\TablerBundle\Screen\Element;

class Tab extends Linkable
{
    use UiColorableTrait;

    public const bool RENDER_PANE = false;
    public const bool RENDER_TAB = true;

    private Icon $icon;
    private Badge $badge;
    private Caption $label;
    private Tooltip $title;
    private bool $active=false;
    private bool $renderMode = self::RENDER_TAB;

    public function __construct(string $label, Element|string|null $content)
    {
        parent::__construct($content, '', false, ['id' => uniqid()]);
        $this->icon = new Icon('');
        $this->badge = new Badge('');
        $this->label = new Caption($label);
        $this->title = new Tooltip('');
        $this->setContent($content);
    }

    public function getLabel(): Caption
    {
        return $this->label;
    }

    public function getIcon(): Icon
    {
        return $this->icon;
    }

    public function getBadge(): Badge
    {
        return $this->badge;
    }

    public function getTitle(): Tooltip
    {
        return $this->title;
    }

    public function getActive(): bool
    {
        return $this->active;
    }

    public function setActive(TabSet $group): self
    {
        $this->active = $group->getActive() === $this;
        return $this;
    }

    public function getId(): ?string
    {
        return $this->attr['id'];
    }

    public function setId(?string $id): self
    {
        $this->attr['id'] = $id;
        return $this;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        if ($this->renderMode === self::RENDER_TAB) {
            $this->addClass('nav-link');
            if ($this->getActive()) {
                $this->addClass('active');
                $this->attr['aria-selected'] = true;
            }
            else {
                $this->attr['aria-selected'] = false;
                $this->attr['tabindex'] = -1;
            }
            if ($this->hasPane()) {
                $this->attr['data-bs-toggle'] = 'tab';
            }
            $this->icon->addClass('icon');
        }
    }

    public function getUrl(): string
    {
        if ($this->hasPane()) {
            return sprintf('#%s-pane', $this->getId());
        }
        return parent::getUrl();
    }

    protected function renderContent(): string
    {
        $enabled = $this->getIsEnabled();
        $backup = $this->getContent();
        $this
            ->setEnabled(true)
            ->requireClass('disabled', !$enabled);

        $content = $this->icon->renderWithIcon($this->getLabel());
        $content .= $this->badge->render();
        $this->title->applyTo($this);
        $this->setContent($content);
        $html = parent::renderContent();
        $this->setEnabled($enabled)->setContent($backup);
        return $html;
    }

    public function hasPane(): bool
    {
        if (!$this->getIsEnabled()) {
            return false;
        }
        if (!empty($this->getRoute())) {
            return false;
        }
        if (empty($this->getLink()) || $this->getLink() === '#' || !str_starts_with($this->getLink(), '#')) {
            return $this->active;
        }
        return true;
    }

    public function renderTab(TabSet $group): string
    {
        $tag = $group->getTag() === 'div' ? 'div' : 'li';
        $this->renderMode = self::RENDER_TAB;
        $tabLink = $this->render();
        return sprintf('<%s class="nav-item" role="presentation">%s</%s>', $tag, $tabLink, $tag);
    }

    public function renderPane(TabSet $group): string
    {
        $this->renderMode = self::RENDER_PANE;
        return $this->render();
    }

    public function render(): string
    {
        if ($this->renderMode === self::RENDER_PANE) {
            if ($this->hasPane()) {
                $pane = (new HtmlElement('div', $this->getContent()))
                    ->addClass('tab-pane')
                    ->setId("{$this->getId()}-pane")
                    ->setAttr('role', 'tabpanel');
                if ($this->getActive()) {
                    $pane->addClass('active', 'show');
                }
                return $pane;
            } else {
                return '';
            }
        }
        return parent::render();
    }
}
