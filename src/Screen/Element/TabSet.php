<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

class TabSet extends Element implements \ArrayAccess, \Countable
{
    public const ?bool RENDER_FULL = null;
    public const ?bool RENDER_CONTENT = false;
    public const ?bool RENDER_TABS = true;

    /** @var Tab[] */
    private array $tabs = [];
    private ?Tab $active = null;
    private ?bool $renderMode = self::RENDER_FULL;
    private bool $fill = false;
    private bool $reverse = false;

    public const array ACCEPTED_TAGS = [
        'div',
        'ul',
        'ol',
    ];

    public function __construct(string $name = 'div', array $attributes = [])
    {
        parent::__construct($name, '', $attributes);
    }

    public function getTag(): string
    {
        return $this->getName();
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function offsetExists(mixed $offset): bool
    {
        if (\is_string($offset)) {
            try {
                $this->getTabById($offset);

                return true;
            } catch (\Exception $e) {
                return false;
            }
        }

        return \array_key_exists($offset, $this->tabs);
    }

    public function offsetGet(mixed $offset): ?Tab
    {
        if (\is_string($offset)) {
            return $this->getTabById($offset);
        }

        return $this->tabs[$offset];
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        if (!$value instanceof Tab) {
            throw new \InvalidArgumentException('The value must be a Tab instance');
        }
        if (\is_string($offset) || $offset >= \count($this->tabs)) {
            $this->pushTab($value);
        } else {
            $this->insertTab($value, $offset);
        }
    }

    public function offsetUnset(mixed $offset): void
    {
        $this->deleteTab($offset);
    }

    public function count(): int
    {
        return \count($this->tabs);
    }

    /**
     * @return Tab[]
     */
    public function getTabs(): array
    {
        return $this->tabs;
    }

    /** @return Tab[] */
    public function getEnabledTabs(): array
    {
        return array_filter($this->tabs, function (Tab $column) { return $column->getIsEnabled(); });
    }

    public function getTabById(string $id): Tab
    {
        foreach ($this->tabs as $tab) {
            if ($tab->getId() === $id) {
                return $tab;
            }
        }
        throw new \InvalidArgumentException("Tab '$id' does not exist.");
    }

    public function getTabByIndex(int $index): Tab
    {
        if ($index >= 0 && $index < \count($this->tabs)) {
            return $this->tabs[$index];
        }
        throw new \LogicException("Tab '$index' does not exist.");
    }

    public function pushTab(Tab $newTab): self
    {
        return $this->insertTab($newTab, \count($this->tabs));
    }

    public function insertTab(Tab $newTab, int $position = 0): self
    {
        $position = min(\count($this->tabs), max(0, $position));
        foreach ($this->tabs as $tab) {
            if ($tab->getId() === $newTab->getId()) {
                throw new \InvalidArgumentException("Tab '{$newTab->getId()}' already exists.");
            }
        }
        $newTabs = [];
        for ($k = 0; $k < $position; $k++) {
            $newTabs[] = $this->tabs[$k];
        }
        $this->tabs[] = $newTab;
        for ($k = $position; $k < \count($this->tabs); $k++) {
            $newTabs[] = $this->tabs[$k];
        }
        $this->tabs = $newTabs;
        $this->setActive($this->getActive() ?? $this->tabs[0]);

        return $this;
    }

    public function sortTabs(\Closure|callable $comparator): self
    {
        usort($this->tabs, $comparator);
        $this->tabs = array_values($this->tabs);

        return $this;
    }

    public function popTab(): ?Tab
    {
        if (!empty($this->tabs)) {
            if ($this->active === $this->tabs[\count($this->tabs) - 1]) {
                $this->setActive(null);
            }

            return array_pop($this->tabs);
        }

        return null;
    }

    public function deleteTab(Tab|string|int $tab): self
    {
        if ($this->active === $tab) {
            $this->setActive(null);
        }
        foreach ($this->tabs as $index => $test) {
            if (\is_int($tab)) {
                if ($index === $tab) {
                    unset($this->tabs[$index]);
                    $this->tabs = array_values($this->tabs);

                    return $this;
                }
            } elseif (\is_string($tab)) {
                if ($test->getId() === $tab) {
                    unset($this->tabs[$index]);
                    $this->tabs = array_values($this->tabs);

                    return $this;
                }
            } else {
                if ($test === $tab) {
                    unset($this->tabs[$index]);
                    $this->tabs = array_values($this->tabs);

                    return $this;
                }
            }
        }
        if ($tab instanceof Tab) {
            $tab = $tab->getId();
        }
        throw new \InvalidArgumentException("Tab '$tab' does not exist.");
    }

    public function getActive(): ?Tab
    {
        return $this->active;
    }

    public function setActive(?Tab $tab): self
    {
        $this->active = $tab;
        foreach ($this->tabs as $other) {
            $other->setActive($this);
        }

        return $this;
    }

    public function isFill(): bool
    {
        return $this->fill;
    }

    public function setFill(bool $fill): self
    {
        $this->fill = $fill;

        return $this;
    }

    public function isReverse(): bool
    {
        return $this->reverse;
    }

    public function setReverse(bool $reverse): self
    {
        $this->reverse = $reverse;

        return $this;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        if ($this->renderMode === self::RENDER_TABS) {
            $this
                ->addClass('nav', 'nav-tabs')
                ->requireClass('nav-fill', $this->fill)
                ->requireClass('flex-row-reverse', $this->reverse);
            $this->attr['role'] = 'tablist';
            $this->attr['data-bs-toggle'] = 'tabs';
        }
    }

    protected function renderContent(): string
    {
        if ($this->renderMode === self::RENDER_TABS) {
            $this->setContent(implode('', array_map(function (Tab $tab) {
                return $tab->renderTab($this);
            }, $this->tabs)));

            return parent::renderContent();
        } elseif ($this->renderMode === self::RENDER_CONTENT) {
            $this->setContent(implode('', array_map(function (Tab $tab) {
                return $tab->renderPane($this);
            }, $this->tabs)));

            return parent::renderContent();
        } else {
            $this->renderMode = true;
            $tabs = $this->renderContent();
            $this->renderMode = false;
            $panes = $this->renderContent();
            $this->renderMode = null;
            $this->setContent('');

            return \sprintf('<div class="tabs">%s%s</div>', $tabs, $panes);
        }
    }

    public function render(?bool $mode = null): string
    {
        $this->renderMode = $mode;
        if ($mode === self::RENDER_CONTENT) {
            $tag = $this->getName();
            $classes = $this->getClasses();
            $this->clearClasses()->addClass('tab-content')->setName('div');
            $html = parent::render();
            $this->clearClasses()->mergeClasses($classes)->setName($tag);

            return $html;
        } else {
            return parent::render();
        }
    }
}
