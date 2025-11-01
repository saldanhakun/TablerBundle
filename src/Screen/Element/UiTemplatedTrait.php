<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

use Twig\TemplateWrapper;

trait UiTemplatedTrait
{
    private TemplateWrapper|string|null $template = null;
    private array $templateContext = [];

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
