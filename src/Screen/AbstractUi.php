<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen;

use Saldanhakun\TablerBundle\Twig\HtmlEscaper;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Environment;

abstract class AbstractUi
{
    private HtmlEscaper $escaper;
    private array $fixedParams = [];
    protected array $_params = [];

    public function __construct(
        private readonly RequestStack $requestStack,
        private readonly Environment $twig,
    ) {
        $this->escaper = HtmlEscaper::singleton();
        $this->configure();
    }

    public function getEscaper(): HtmlEscaper
    {
        return $this->escaper;
    }

    public function getRequestStack(): RequestStack
    {
        return $this->requestStack;
    }

    public function getTwig(): Environment
    {
        return $this->twig;
    }

    protected function configure(): void
    {
        // nop
    }

    public function getFixedParams(): array
    {
        return $this->fixedParams;
    }

    public function setFixedParams(array $fixedParams): self
    {
        $this->fixedParams = $fixedParams;

        return $this;
    }

    abstract public function getTemplate(): string;

    public function getTemplateContext(): array
    {
        return $this->_params;
    }
}
