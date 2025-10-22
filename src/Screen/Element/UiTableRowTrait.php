<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Screen\Column\AbstractColumn;
use KevinPapst\TablerBundle\Screen\Column\PropertyColumn;
use KevinPapst\TablerBundle\Screen\Element\Data\AbstractRecordData;

trait UiTableRowTrait
{
    private HtmlElement $tr;
    private ?array $colCache=null;
    private bool $ignoreDisabled = true;

    protected function createTr(): void
    {
        $this->tr = new HtmlElement('tr', '');
    }

    public function getTr(): HtmlElement
    {
        return $this->tr;
    }

    public function getIgnoreDisabled(): bool
    {
        return $this->ignoreDisabled;
    }

    public function setIgnoreDisabled(bool $ignoreDisabled): self
    {
        $this->ignoreDisabled = $ignoreDisabled;
        return $this;
    }

    /**
     * @return AbstractColumn[]
     */
    protected function getSourceColumns(): array
    {
        return $this->getIgnoreDisabled() ? $this->getColumns()->getEnabledColumns() : $this->getColumns()->getColumns();
    }

    protected function createTableCell(AbstractColumn $column, bool $header): TableCell
    {
        $cell = (new TableCell($header ? ($column->getLabel()??''):'', $header?'th':'td'))
            ->setRowSpan($column->getRowSpan())
            ->setcolSpan($column->getColSpan());
        if ($header) {
            $cell->getTooltip()->setTitle($column->getTitle());
        }
        else {
            if ($column instanceof PropertyColumn && $column->getLinkRoute()) {
                $cell->setLinkable(new DynamicLinkable('', $column->getLinkRoute(), $column->getLinkRouteArgs(), $column->getLinkRoutePlaceholders()));
                if ($this instanceof AbstractRecordData) {
                    $cell->getLinkable()->setDataLink($this);
                }
            }
        }
        return $cell;
    }

    /**
     * @return TableCell[]
     */
    protected function loadColumns(bool $header): array
    {
        if ($this->colCache === null) {
            $this->colCache = [];
            foreach ($this->getSourceColumns() as $column) {
                $this->colCache[] = $this->createTableCell($column, $header);
            }
        }
        return $this->colCache;
    }

}
