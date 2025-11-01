<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action\List;

use Saldanhakun\TablerBundle\Screen\Element\PlugElement;
use Saldanhakun\TablerBundle\Screen\Plug\TabbedCardPlug;

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
