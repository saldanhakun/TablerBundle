<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Router;

/***
 * @method string lightTheme()
 * @method string darkTheme()
 *
 * @method string getRouteForLightTheme()
 * @method string getRouteForDarkTheme()
 */
final class UiRouter extends AbstractRouter
{
    protected function getRoutePrefix(): string
    {
        return AbstractAppRouteHelper::UI;
    }
}
