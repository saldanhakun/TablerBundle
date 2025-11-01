<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element\Data;

use Saldanhakun\TablerBundle\Screen\Element\ColumnSet;
use Saldanhakun\TablerBundle\Screen\Element\UiTableRowTrait;
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
            $col->setContent($column->renderCell($this->getRecord() ?? []));
        }
        $this->getTr()->setContent(implode('', $cols));

        return $this->getTr()->render();
    }
}
