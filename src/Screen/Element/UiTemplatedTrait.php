<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use Twig\TemplateWrapper;

trait UiTemplatedTrait
{

    private TemplateWrapper|string|null $template=null;
    private array $templateContext=[];

    public function getTemplate(): TemplateWrapper|string|null
    {
        return $this->template;
    }

    public function setTemplate(TemplateWrapper|string|null $template): self
    {
        if ($this->requireTemplate() && empty($this->template)) {
            throw new \InvalidArgumentException('Template is mandatory');
        }
        $this->template = $template;
        return $this;
    }

    public function getTemplateContext(): array
    {
        return $this->templateContext;
    }

    public function setTemplateContext(array $templateContext): self
    {
        $this->templateContext = $templateContext;
        return $this;
    }

    protected function requireTemplate(): bool
    {
        return false;
    }
}
