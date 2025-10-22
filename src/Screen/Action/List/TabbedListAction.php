<?php

namespace KevinPapst\TablerBundle\Screen\Action\List;

use KevinPapst\TablerBundle\Screen\Element\PlugElement;
use KevinPapst\TablerBundle\Screen\Plug\TabbedCardPlug;

class TabbedListAction extends ListAction
{

    private TabbedCardPlug $tabbedCardPlug;

    protected function configure(): void
    {
        parent::configure();
        $this->tabbedCardPlug = new TabbedCardPlug($this->getRequestStack(), $this->getTwig());
    }

    public function getTabbedCardPlug(): TabbedCardPlug
    {
        return $this->tabbedCardPlug;
    }

    public function getTemplate(): string
    {
        return '@Tabler/crud/tabbed-table.html.twig';
    }

    protected function run(): void
    {
        parent::run();
        $active = $this->tabbedCardPlug->getTabs()->getActive();
        $active->setContent($this->output);
        $this->output = new PlugElement($this->tabbedCardPlug);
    }
}
