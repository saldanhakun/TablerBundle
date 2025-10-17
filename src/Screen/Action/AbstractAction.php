<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Action;

use Saldanhakun\DoctrineBundle\Describer\BaseDescriber;
use KevinPapst\TablerBundle\Screen\Screen;
use KevinPapst\TablerBundle\Twig\HtmlEscaper;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Uid\Ulid;

abstract class AbstractAction
{
    private HtmlEscaper $escaper;
    private ?BaseDescriber $describer = null;
    private ?Screen $screen = null;
    private array $fixedParams = [];
    protected array $_params = [];
    private ?string $entryPoint = null;

    public function __construct(
        private readonly RequestStack $requestStack
    ) {
        $this->escaper = HtmlEscaper::singleton();
    }

    public function getEscaper(): HtmlEscaper
    {
        return $this->escaper;
    }

    public function getRequestStack(): RequestStack
    {
        return $this->requestStack;
    }

    protected function identify(object $record): string
    {
        $id = $record->getId();
        if ($id instanceof Ulid) {
            return strtolower($id->toBase32());
        } else {
            return \strval($id);
        }
    }

    public function getDescriber(): ?BaseDescriber
    {
        return $this->describer;
    }

    public function setDescriber(?BaseDescriber $describer): self
    {
        $this->describer = $describer;

        return $this;
    }

    public function getEntryPoint(): ?string
    {
        return $this->entryPoint;
    }

    public function setEntryPoint(?string $entryPoint): self
    {
        $this->entryPoint = $entryPoint;
        return $this;
    }

    public function getScreen(): ?Screen
    {
        return $this->screen;
    }

    public function setScreen(?Screen $screen): self
    {
        $this->screen = $screen;

        return $this;
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

    abstract public function getTitle(): string;

    public function getSubTitle(): string
    {
        return '';
    }

    protected function preExecute(): void
    {
        $this->_params = array_merge(array_filter([
            'action' => $this,
            'screen' => $this->getScreen(),
            'describer' => $this->getDescriber(),
            'entrypoint' => $this->getEntryPoint(),
        ]), $this->fixedParams);
    }

    abstract protected function run(): void;

    protected function postExecute(): void
    {
        // nop
    }

    public function execute(): self
    {
        $this->preExecute();
        $this->run();
        $this->postExecute();

        return $this;
    }

    public function isGlobalAction(): bool
    {
        return false;
    }

    public function isBulkAction(): bool
    {
        return false;
    }

    public function isSingleAction(): bool
    {
        return false;
    }
}
