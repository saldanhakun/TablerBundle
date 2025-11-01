<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

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
