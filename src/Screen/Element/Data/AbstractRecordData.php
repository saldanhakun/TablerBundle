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
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

abstract class AbstractRecordData extends ElementData
{
    private array|object|null $record = null;

    public function __construct(private readonly ColumnSet $columns, private readonly UrlGeneratorInterface $urlGenerator)
    {
    }

    public function getColumns(): ColumnSet
    {
        return $this->columns;
    }

    public function getUrlGenerator(): UrlGeneratorInterface
    {
        return $this->urlGenerator;
    }

    public function getRecord(): array|object|null
    {
        return $this->record;
    }

    public function setRecord(array|object|null $record): self
    {
        $this->record = $record;

        return $this;
    }
}
