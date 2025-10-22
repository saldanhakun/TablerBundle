<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\LinkTarget;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class Linkable extends Element
{
    use UiLinkableTrait;
    use UiRoutableTrait;

    private ?UrlGeneratorInterface $urlGenerator=null;
    public const array ACCEPTED_TAGS = [
        'a',
        'button',
    ];

    public function __construct(Element|string $content, string $urlOrRoute, bool $button=false, array $attributes = [])
    {
        parent::__construct($button?'button':'a', $content, $attributes);
        if (preg_match('/^[a-z_0-9.]+$/', $urlOrRoute)) {
            $this->route = $urlOrRoute;
        }
        else {
            $this->link = $urlOrRoute;
        }
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getUrlGenerator(): ?UrlGeneratorInterface
    {
        return $this->urlGenerator;
    }

    public function setUrlGenerator(?UrlGeneratorInterface $urlGenerator): self
    {
        $this->urlGenerator = $urlGenerator;
        return $this;
    }

    public function getUrl(): string
    {
        if (!empty($this->route)) {
            if (!$this->urlGenerator) {
                throw new \LogicException("Url generator must be set before rendering");
            }
            return $this->urlGenerator->generate($this->route, $this->routeParams);
        }
        elseif (!empty($this->link)) {
            return $this->link;
        }
        else {
            return '#';
        }
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this->attr['href'] = $this->getUrl();
        if ($this->getTarget() != LinkTarget::NONE) {
            $this->attr['target'] = $this->getTarget();
        }
        else {
            unset($this->attr['target']);
        }
    }

}
