<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

use Twig\TemplateWrapper;

class TwigColumn extends AbstractColumn
{
    private TemplateWrapper $template;
    private ?array $context;
    private ?string $recordParamName = 'record';

    public function __construct(TemplateWrapper $template, ?array $context = [])
    {
        $this->template = $template;
        $this->context = $context;
        parent::__construct();
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

    public function getContext(): ?array
    {
        return $this->context;
    }

    public function setContext(?array $context): self
    {
        $this->context = $context;

        return $this;
    }

    public function getRecordParamName(): ?string
    {
        return $this->recordParamName;
    }

    public function setRecordParamName(?string $recordParamName): self
    {
        $this->recordParamName = $recordParamName;

        return $this;
    }

    protected function renderContent(object|array $record): string
    {
        $params = $this->context ?? [];
        if ($this->context === null && $this->recordParamName === null) {
            $params = $record;
        } elseif ($this->recordParamName !== null) {
            $params[$this->recordParamName] = $record;
        }

        return $this->template->render($params);
    }
}
