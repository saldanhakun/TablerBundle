<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Element;

class Table extends Element
{
    private ColumnSet $columns;

    public function __construct(string $id, array $attributes = [])
    {
        parent::__construct('table', '', $attributes);
        $this->columns = new ColumnSet(null, null);
        $this->attr['id'] = $id;
        if (empty($attributes)) {
            $this->addClass('table', 'table-responsive', 'table-striped');
        }
    }

    public function getColumns(): ColumnSet
    {
        return $this->columns;
    }

    public function getResponsive(): bool
    {
        return $this->hasClass('table-responsive');
    }

    public function setResponsive(bool $isResponsive): self
    {
        return $this->requireClass('table-responsive', $isResponsive);
    }

    public function getStriped(): bool
    {
        return $this->hasClass('table-striped');
    }

    public function setStriped(bool $isStriped): self
    {
        return $this->requireClass('table-striped', $isStriped);
    }

    protected function renderContent(): string
    {
        $thead = new TableHeader($this);
        $tbody = new HtmlElement('tbody', parent::renderContent());
        return $thead . $tbody;
    }
}
