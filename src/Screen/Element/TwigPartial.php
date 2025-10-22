<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use Twig\TemplateWrapper;

class TwigPartial extends Element
{

    use UiTemplatedTrait;

    public function __construct(TemplateWrapper $template, array $context = [])
    {
        parent::__construct('twig', '', []);
        $this->setTemplate($template)->setTemplateContext($context);
    }

    public function getTemplate(): TemplateWrapper
    {
        return $this->template;
    }

    public function setTemplate(TemplateWrapper $template): self
    {
        $this->template = $template;
        return $this;
    }

    protected function renderContent(): string
    {
        return $this->template->render($this->templateContext);
    }

}
