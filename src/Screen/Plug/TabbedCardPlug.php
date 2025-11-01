<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Plug;

use Saldanhakun\TablerBundle\Screen\Element\TabSet;

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
