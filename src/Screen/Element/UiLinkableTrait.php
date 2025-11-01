<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Enum\LinkTarget;

trait UiLinkableTrait
{
    private ?string $link = null;
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

    public function getTarget(bool $asString = true): LinkTarget|string|null
    {
        return LinkTarget::instanceOrString($this->target, $asString);
    }

    public function setTarget(LinkTarget|string|null $target): self
    {
        $this->target = LinkTarget::assert($target);

        return $this;
    }
}
