<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Controller;

use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use KevinPapst\TablerBundle\Security\TablerAppAccessControl;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

##[IsGranted(TablerAppAccessControl::ROLE_USER)]
##[Route(path: '/ui', name: AbstractAppRouteHelper::UI . '.')]
abstract class UiCustomizerController extends AbstractController
{
    ##[Route(path: '/dark-mode', name: 'dark_mode')]
    public function themeDark(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->set('theme', 'dark');

        return $this->redirectToRoute(AbstractAppRouteHelper::START);
    }

    ##[Route(path: '/light-mode', name: 'light_mode')]
    public function themeLight(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->remove('theme');

        return $this->redirectToRoute(AbstractAppRouteHelper::START);
    }
}
