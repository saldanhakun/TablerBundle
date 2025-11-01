<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

class Icon extends Element
{
    use UiColorableTrait;
    private ?string $icon = '';
    private int $size = 1;
    private bool $before = true;

    public const array ACCEPTED_TAGS = [
        'i',
        'span',
    ];

    public function __construct(string $icon, array $attributes = [])
    {
        parent::__construct('i', '', $attributes);
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function getSize(): int
    {
        return $this->size;
    }

    public function setSize(int $size): self
    {
        $this->size = max(0, min(5, $size));

        return $this;
    }

    public function getIsEnabled(): bool
    {
        return parent::getIsEnabled() && !empty($this->icon);
    }

    public function getBefore(): bool
    {
        return $this->before;
    }

    public function setBefore(bool $before): self
    {
        $this->before = $before;

        return $this;
    }

    public function renderWithIcon(string $content, string $spacer = ' '): string
    {
        $icon = $this->render();
        if ($this->getIsEnabled() && !empty($icon)) {
            if ($this->before) {
                $content = $icon . $spacer . $content;
            } else {
                $content .= $spacer . $icon;
            }
        }

        return $content;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this->addClass($this->icon);
        if (str_starts_with($this->icon, 'fa') && $this->size) {
            $this->addClass(\sprintf('fa-%dx', $this->size));
        }
        if (!empty($this->color)) {
            $this->addClass("text-{$this->color}");
        }
    }
}
