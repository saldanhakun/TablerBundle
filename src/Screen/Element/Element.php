<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Twig\HtmlEscaper;

class Element
{
    use UiClassTrait;

    private string $name;
    protected array $attr = [];
    private bool $enabled = true;
    protected HtmlEscaper $htmlEscaper;

    public function __construct(string $name, protected Element|string $content, array $attributes=[])
    {
        $this->setName($name);
        $this->htmlEscaper = HtmlEscaper::singleton();
        foreach ($attributes as $attr => $value) {
            $setter = 'set'.ucfirst($attr);
            if (method_exists($this, $setter)) {
                $this->$setter($name);
            }
            else {
                throw new \InvalidArgumentException(sprintf('The attribute "%s" is not supported in %s', $attr, get_class($this)));
            }
        }
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        if (in_array($name, $invalid, true)) {
            throw new \InvalidArgumentException(sprintf('The name "%s" is invalid for %s.', $name, get_class($this)));
        }
        if (!empty($valid) && !in_array($name, $valid, true)) {
            throw new \InvalidArgumentException(sprintf('The name "%s" is invalid for %s.', $name, get_class($this)));
        }
        return $name;
    }

    public function __toString(): string
    {
        if ($this->enabled) {
            return $this->render();
        }
        return '';
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $this->assertName($name, [], []);
        return $this;
    }

    public function getContent(): Element|string
    {
        return $this->content;
    }

    public function setContent(Element|string $content): self
    {
        $this->content = $content;
        return $this;
    }

    public function getIsEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;
        return $this;
    }

    public function getId(): ?string
    {
        return $this->attr['id'] ?? null;
    }

    protected function renderAttributes(array $attributes, bool $spaceBefore=false): string
    {
        $html = $this->htmlEscaper->safeAttributeSet($attributes);
        if (!$spaceBefore) return trim($html);
        return $html;
    }

    protected function prepareRender(): void
    {
        // nop
    }

    protected function renderContent(): string
    {
        return $this->getContent();
    }

    public function render(): string
    {
        $backupAttr = $this->attr;
        $backupClass = $this->classes;
        $this->prepareRender();
        $attr = $this->renderAttributes(array_merge($this->attr, array_filter(['class' => $this->getClass()])), true);
        $content = $this->renderContent();
        $this->attr = $backupAttr;
        $this->classes = $backupClass;
        return sprintf('<%s%s>%s</%s>', $this->getName(), $attr, $content, $this->getName());
    }
}
