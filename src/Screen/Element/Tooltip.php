<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Saldanhakun\TablerBundle\Enum\AlertType;
use Saldanhakun\TablerBundle\Enum\TooltipPlacement;

class Tooltip extends Element
{
    private ?string $color;

    public const array ACCEPTED_TAGS = [
        'abbr',
        'span',
        'a',
    ];

    public function __construct(string $content, AlertType|string|null $color = AlertType::INFO)
    {
        parent::__construct('abbr', $content, []);
        $this->setColor($color);
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getTitle(): ?string
    {
        return $this->attr['title'] ?? null;
    }

    public function setTitle(?string $title): self
    {
        $this->attr['title'] = $title;
        if ($title === null) {
            unset($this->attr['title']);
        }

        return $this;
    }

    public function getPlacement(bool $asString = true): TooltipPlacement|string|null
    {
        return TooltipPlacement::instanceOrString($this->attr['data-bs-placement'] ?? null, $asString);
    }

    public function setPlacement(TooltipPlacement|string|null $placement): self
    {
        $this->attr['data-bs-placement'] = TooltipPlacement::assertOrNull($placement);
        if ($placement === null) {
            unset($this->attr['data-bs-placement']);
        }

        return $this;
    }

    public function getAllowHtml(): bool
    {
        return ($this->attr['data-bs-html'] ?? 'false') === 'true';
    }

    public function setAllowHtml(bool $allow): self
    {
        if ($allow) {
            $this->attr['data-bs-html'] = true;
        } else {
            unset($this->attr['data-bs-html']);
        }

        return $this;
    }

    public function getColor(bool $asString = true): AlertType|string|null
    {
        return AlertType::instanceOrString($this->color, $asString);
    }

    public function setColor(AlertType|string|null $color): self
    {
        $this->color = AlertType::assertOrNull($color);

        return $this;
    }

    public function getIsEnabled(): bool
    {
        return parent::getIsEnabled() && !empty($this->title);
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this->attr['data-bs-toggle'] = 'tooltip';
    }

    public function applyTo(Element $element)
    {
        if ($this->getIsEnabled()) {
            $element->attr['data-bs-toggle'] = 'tooltip';
            foreach (['data-bs-html', 'data-bs-placement', 'title'] as $attr) {
                $element->attr[$attr] = $this->attr[$attr];
            }
        }
    }
}
