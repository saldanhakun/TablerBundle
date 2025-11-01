<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Controller;

use Saldanhakun\TablerBundle\Router\AbstractAppRouteHelper;
use Saldanhakun\TablerBundle\Security\TablerAppAccessControl;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

//#[IsGranted(TablerAppAccessControl::ROLE_USER)]
//#[Route(path: '/ui', name: AbstractAppRouteHelper::UI . '.')]
abstract class UiCustomizerController extends AbstractController
{
    //#[Route(path: '/dark-mode', name: 'dark_mode')]
    public function themeDark(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->set('theme', 'dark');

        return $this->redirectToRoute(AbstractAppRouteHelper::START);
    }

    //#[Route(path: '/light-mode', name: 'light_mode')]
    public function themeLight(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->remove('theme');

        return $this->redirectToRoute(AbstractAppRouteHelper::START);
    }
}
