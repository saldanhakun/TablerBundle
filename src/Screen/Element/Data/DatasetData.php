<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element\Data;

use Doctrine\Common\Collections\Collection;

class DatasetData extends ElementData
{
    public function __construct(protected Collection|array $dataset, protected AbstractRecordData $handler)
    {
    }

    public function getDataset(): Collection|array
    {
        return $this->dataset;
    }

    public function setDataset(Collection|array $dataset): self
    {
        $this->dataset = $dataset;

        return $this;
    }

    public function getHandler(): AbstractRecordData
    {
        return $this->handler;
    }

    public function setHandler(AbstractRecordData $handler): self
    {
        $this->handler = $handler;

        return $this;
    }

    public function render(): string
    {
        $output = '';
        foreach ($this->dataset as $row) {
            $output .= $this->handler->setRecord($row)->render();
        }

        return $output;
    }
}
