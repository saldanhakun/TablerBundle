<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

class CallbackColumn extends AbstractColumn
{
    private \Closure $callback;

    public function __construct(\Closure $callback)
    {
        $this->callback = $callback;
        parent::__construct();
    }

    public function getCallback(): \Closure
    {
        return $this->callback;
    }

    public function setCallback(\Closure $callback): self
    {
        $this->callback = $callback;

        return $this;
    }

    protected function renderContent(object|array $record): string
    {
        $value = \call_user_func($this->callback, $record);

        return $this->renderContentValue($value);
    }
}
