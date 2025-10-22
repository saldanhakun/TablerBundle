<?php

namespace KevinPapst\TablerBundle\Screen\Element\Data;

use KevinPapst\TablerBundle\Screen\Element\ColumnSet;
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
