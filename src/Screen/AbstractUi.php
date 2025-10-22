<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen;

use KevinPapst\TablerBundle\Twig\HtmlEscaper;
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
