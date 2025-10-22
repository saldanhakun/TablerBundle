<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Enum\LinkTarget;

trait UiLinkableTrait
{

    private ?string $link=null;
    private ?string $target = null;

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;
        return $this;
    }

    public function getTarget(bool $asString=true): LinkTarget|string|null
    {
        return LinkTarget::instanceOrString($this->target, $asString);
    }

    public function setTarget(LinkTarget|string|null $target): self
    {
        $this->target = LinkTarget::assert($target);
        return $this;
    }

}
