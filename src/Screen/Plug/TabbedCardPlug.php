<?php

namespace KevinPapst\TablerBundle\Screen\Plug;

use KevinPapst\TablerBundle\Screen\Element\TabSet;

class TabbedCardPlug extends AbstractPlug
{
    private TabSet $tabs;

    protected function configure(): void
    {
        parent::configure();
        $this->tabs = new TabSet();
    }

    public function getTabs(): TabSet
    {
        return $this->tabs;
    }

    public function getTemplate(): string
    {
        return '@Tabler/plugs/tabbed-card.html.twig';
    }

    protected function process(): void
    {
        $this->tabs->addClass('card-header-tabs');
        $this->_params['tab_list'] = $this->tabs->render(TabSet::RENDER_TABS);
        $this->tabs->removeClass('card-header-tabs');
        $this->_params['tab_panes'] = $this->tabs->render(TabSet::RENDER_CONTENT);
        $this->rendered = $this->getTwig()->render($this->getTemplate(), $this->_params);
    }

}
