<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Enum\TooltipPlacement;

class TableCell extends Element
{
    private Icon $icon;
    private Tooltip $tooltip;
    private ?DynamicLinkable $linkable = null;

    public const array ACCEPTED_TAGS = [
        'th',
        'td',
    ];

    public function __construct(Element|string $content, string $name = 'td', array $attributes = [])
    {
        parent::__construct($name, $content, $attributes);
        $this->setName($name);
        $this->icon = new Icon('');
        $this->tooltip = new Tooltip('');
        $this->tooltip->setPlacement(TooltipPlacement::TOP);
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

    public function getColSpan(): int
    {
        return $this->attr['colspan'] ?? 1;
    }

    public function setColSpan(int $colspan): self
    {
        if ($colspan < 2) {
            unset($this->attr['colspan']);
        } else {
            $this->attr['colspan'] = $colspan;
        }

        return $this;
    }

    public function getRowSpan(): int
    {
        return $this->attr['rowspan'] ?? 1;
    }

    public function setRowSpan(int $rowspan): self
    {
        if ($rowspan < 2) {
            unset($this->attr['rowspan']);
        } else {
            $this->attr['rowspan'] = $rowspan;
        }

        return $this;
    }

    public function getLinkable(): ?DynamicLinkable
    {
        return $this->linkable;
    }

    public function setLinkable(?DynamicLinkable $linkable): self
    {
        $this->linkable = $linkable;

        return $this;
    }

    protected function renderContent(): string
    {
        if ($this->linkable) {
            $this->tooltip->applyTo($this->linkable);
            $this->linkable->setContent($this->icon->renderWithIcon(parent::renderContent()));

            return $this->linkable->render();
        } else {
            $this->tooltip->applyTo($this);

            return $this->icon->renderWithIcon(parent::renderContent());
        }
    }
}
