<?php

namespace KevinPapst\TablerBundle\Screen\Element;

class TableHeader extends Element
{
    use UiTableRowTrait;

    public function __construct(private readonly Table $table, array $attributes = [])
    {
        parent::__construct('thead', '', $attributes);
        $this->createTr();
    }

    public function getTable(): Table
    {
        return $this->table;
    }

    public function getColumns(): ColumnSet
    {
        return $this->table->getColumns();
    }

    protected function renderContent(): string
    {
        $this->getTr()->setContent(implode('', $this->loadColumns(true)));
        $this->setContent($this->getTr()->render());
        return parent::renderContent();
    }
}
