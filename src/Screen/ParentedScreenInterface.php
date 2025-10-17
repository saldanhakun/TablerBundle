<?php

namespace KevinPapst\TablerBundle\Screen;

use KevinPapst\TablerBundle\Model\MenuItemInterface;

interface ParentedScreenInterface
{

    /**
     * @return MenuItemInterface[]
     */
    public function getParentLinks(): iterable;

}
