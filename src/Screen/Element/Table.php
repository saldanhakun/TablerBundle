<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

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
