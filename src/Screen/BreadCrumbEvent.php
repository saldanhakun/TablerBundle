<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen;

use Saldanhakun\TablerBundle\Event\MenuEvent;
use Symfony\Component\HttpFoundation\Request;

class BreadCrumbEvent extends MenuEvent
{
    public function __construct(private readonly Screen $screen, Request $request)
    {
        parent::__construct($request);
    }

    public function getScreen(): Screen
    {
        return $this->screen;
    }
}
