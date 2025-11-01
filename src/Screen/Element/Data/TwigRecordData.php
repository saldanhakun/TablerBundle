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
use Saldanhakun\TablerBundle\Screen\Element\UiTemplatedTrait;
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
