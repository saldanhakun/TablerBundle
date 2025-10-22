<?php

namespace KevinPapst\TablerBundle\Screen\Element\Data;

use KevinPapst\TablerBundle\Screen\Element\ColumnSet;
use KevinPapst\TablerBundle\Screen\Element\UiTemplatedTrait;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;

class TwigRecordData extends AbstractRecordData
{

    use UiTemplatedTrait;

    public function __construct(ColumnSet $columns, UrlGeneratorInterface $urlGenerator, private readonly Environment $twig)
    {
        parent::__construct($columns, $urlGenerator);
    }

    public function render(): string
    {
        $context = array_merge($this->getTemplateContext(), [
            'record' => $this->getRecord(),
            'columns' => $this->getColumns(),
        ]);
        return $this->twig->render($this->template, $context);
    }

}
