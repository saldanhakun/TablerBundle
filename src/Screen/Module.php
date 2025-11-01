<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen;

use Saldanhakun\TablerBundle\Model\MenuItemModel;

abstract class Module extends Screen
{
    protected function getInnerBreadcrumbs(): iterable
    {
        yield new MenuItemModel(
            \constant(\get_class($this) . '::MODULE_ROUTE_PREFIX'),
            \constant(\get_class($this) . '::NAME'),
            null,
            [],
            \constant(\get_class($this) . '::ICON')
        );
    }

    protected function configure(): void
    {
        parent::configure();
        $this->setTitle(\constant(\get_class($this) . '::NAME'));
    }
}
