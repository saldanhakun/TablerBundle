<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

trait UiClassTrait
{
    private array $classes = [];
    private array $fixedClasses = [];

    public function getClass(): string
    {
        return implode(' ', $this->getAllClasses());
    }

    public function getClasses(): array
    {
        return array_values($this->getAllClasses());
    }

    public function hasClass(string $name): bool
    {
        return \in_array($name, $this->getAllClasses());
    }

    public function addClass(string ...$class): self
    {
        $this->classes = array_unique(array_merge($this->classes, $class));

        return $this;
    }

    public function removeClass(string ...$class): self
    {
        $this->classes = array_diff($this->classes, $class);

        return $this;
    }

    public function toggleClass(string ...$class): self
    {
        foreach ($class as $className) {
            if (\in_array($className, $this->classes)) {
                $this->removeClass($className);
            } else {
                $this->addClass($className);
            }
        }

        return $this;
    }

    public function requireClass(string $class, bool $state = true): self
    {
        if ($state) {
            $this->addClass($class);
        } else {
            $this->removeClass($class);
        }

        return $this;
    }

    public function mergeClasses(array $classes): self
    {
        return $this->addClass(...$classes);
    }

    public function pushClass(string $class): self
    {
        return $this->addClass($class);
    }

    public function popClass(): ?string
    {
        return array_pop($this->classes);
    }

    public function clearClasses(): self
    {
        $this->classes = [];

        return $this;
    }

    protected function getFixedClasses(): array
    {
        return $this->fixedClasses;
    }

    protected function setFixedClasses(array $fixedClasses): self
    {
        $this->fixedClasses = $fixedClasses;

        return $this;
    }

    protected function getAllClasses(): array
    {
        return array_unique(array_merge($this->fixedClasses, $this->classes));
    }
}
