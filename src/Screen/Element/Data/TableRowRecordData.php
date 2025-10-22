<?php

namespace KevinPapst\TablerBundle\Screen\Element\Data;

use KevinPapst\TablerBundle\Screen\Element\ColumnSet;
use KevinPapst\TablerBundle\Screen\Element\UiTableRowTrait;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class TableRowRecordData extends AbstractRecordData
{

    use UiTableRowTrait;

    public function __construct(ColumnSet $columns, UrlGeneratorInterface $urlGenerator)
    {
        parent::__construct($columns, $urlGenerator);
        $this->createTr();
    }

    public function render(): string
    {
        $source = $this->getSourceColumns();
        $cols = $this->loadColumns(false);
        foreach ($source as $index => $column) {
            $col = $cols[$index];
            $col->setContent($column->renderCell($this->getRecord()??[]));
        }
        $this->getTr()->setContent(implode('', $cols));
        return $this->getTr()->render();
    }

}
