<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Controller;

use KevinPapst\TablerBundle\Form\FormDemoModelType;
use KevinPapst\TablerBundle\Helper\ContextHelper;
use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;

##[IsGranted(TablerAppAccessControl::ROLE_SUPPORT)]
##[Route(path: '/demo/{_locale}', name: AbstractAppRouteHelper::DEMO . '.')]
abstract class DemoController extends AbstractController
{
    public static function route(string $identifier): string
    {
        return AbstractAppRouteHelper::DEMO . '.' . $identifier;
    }

    public static function isDemo(?Request $request): bool
    {
        return str_starts_with($request?->getPathInfo(), '/demo');
    }

    ##[Route(path: '/', name: 'homepage')]
    ##[Route(path: '/third-level', name: 'third_level')]
    ##[Route(path: '/third-level2', name: 'third_level2')]
    public function index(): Response
    {
        return $this->render('@Tabler/demo/default/index.html.twig', []);
    }

    ##[Route(path: '/forms', name: 'forms')]
    public function forms(Request $request): Response
    {
        $form = $this->createForm(FormDemoModelType::class);
        $form = $this->handleForm($request, $form);

        return $this->render('@Tabler/demo/default/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    ##[Route(path: '/status', name: 'status')]
    public function status(): Response
    {
        return $this->render('@Tabler/demo/components/status/status.html.twig');
    }

    ##[Route(path: '/carousel', name: 'carousel')]
    public function carousel(): Response
    {
        return $this->render('@Tabler/demo/components/carousels/carousels.html.twig');
    }

    ##[Route(path: '/accordion', name: 'accordion')]
    public function accordion(): Response
    {
        return $this->render('@Tabler/demo/components/accordion/accordion.html.twig');
    }

    ##[Route(path: '/buttons', name: 'buttons')]
    public function buttons(): Response
    {
        return $this->render('@Tabler/demo/components/buttons/buttons.html.twig');
    }

    ##[Route(path: '/dropdown', name: 'dropdown')]
    public function dropdown(): Response
    {
        return $this->render('@Tabler/demo/components/dropdowns/dropdowns.html.twig');
    }

    ##[Route(path: '/alert', name: 'alert')]
    public function alert(): Response
    {
        return $this->render('@Tabler/demo/components/alerts/alerts.html.twig');
    }

    ##[Route(path: '/callout', name: 'callout')]
    public function callout(): Response
    {
        return $this->render('@Tabler/demo/components/callouts/callouts.html.twig');
    }

    ##[Route(path: '/modal', name: 'modal')]
    public function modal(): Response
    {
        return $this->render('@Tabler/demo/components/modals/modals.html.twig');
    }

    ##[Route(path: '/progressbar', name: 'progressbar')]
    public function progressbar(): Response
    {
        return $this->render('@Tabler/demo/components/progressbar/progressbar.html.twig');
    }

    ##[Route(path: '/offcanvas', name: 'offcanvas')]
    public function offcanvas(): Response
    {
        return $this->render('@Tabler/demo/components/offcanvas/offcanvas.html.twig');
    }

    ##[Route(path: '/cardnav', name: 'cardnav')]
    public function cardnav(): Response
    {
        return $this->render('@Tabler/demo/components/cardnav/cardnav.html.twig');
    }

    ##[Route(path: '/cardnav_vertical', name: 'cardnav_vertical')]
    public function cardnavVertical(): Response
    {
        return $this->render('@Tabler/demo/components/cardnav/vertical.html.twig');
    }

    ##[Route(path: '/wizard/{page}', name: 'wizard', requirements: ['page' => "[1-9]\d*"], defaults: ['page' => 1])]
    public function wizard(string $page): Response
    {
        $page = (int) $page;

        if ($page > 10) {
            return $this->redirectToRoute(self::route('wizard'), ['page' => 1]);
        }

        return $this->render('@Tabler/demo/default/wizard.html.twig', [
            'page' => $page,
            'percent' => $page * 10,
        ]);
    }

    ##[Route(path: '/timeline', name: 'timeline')]
    public function timeline(): Response
    {
        return $this->render('@Tabler/demo/components/timelines/timelines.html.twig');
    }

    ##[Route(path: '/full-page', name: 'full-page')]
    public function fullpage(): Response
    {
        return $this->render('@Tabler/demo/default/fullpage.html.twig');
    }

    ##[Route(path: '/error-403', name: 'error403')]
    public function error403(): Response
    {
        throw $this->createAccessDeniedException();
    }

    ##[Route(path: '/error-404', name: 'error404')]
    public function error404(): Response
    {
        throw $this->createNotFoundException();
    }

    ##[Route(path: '/error-500', name: 'error500')]
    public function error500(): Response
    {
        throw new \RuntimeException('Oops');
    }

    ##[Route(path: '/forms/horizontal', name: 'forms-horizontal')]
    public function forms2(Request $request): Response
    {
        $form = $this->createForm(FormDemoModelType::class);
        $form = $this->handleForm($request, $form);

        return $this->render('@Tabler/demo/default/form-horizontal.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    ##[Route(path: '/profile', name: 'profile')]
    public function profile(): Response
    {
        return $this->render('@Tabler/demo/default/profile.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    private function handleForm(Request $request, FormInterface $form): FormInterface
    {
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $this->addFlash('success', 'Fantastic work! You nailed it, form has no errors :-)');
            } else {
                $this->addFlash('danger', 'Form has errors ... please fix them!');
            }
        }

        return $form;
    }

    ##[Route(path: '/dark-mode', name: 'dark-mode')]
    public function themeDark(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->set('theme', 'dark');

        return $this->redirectToRoute(self::route('homepage'));
    }

    ##[Route(path: '/light-mode', name: 'light-mode')]
    public function themeLight(RequestStack $requestStack): Response
    {
        $requestStack->getSession()->remove('theme');

        return $this->redirectToRoute(self::route('homepage'));
    }

    ##[Route(path: '/navbar-overlapping', name: 'navbar-overlapping')]
    public function navbarOverlapping(ContextHelper $contextHelper): Response
    {
        $contextHelper->setIsNavbarOverlapping(true);

        return $this->render('@Tabler/demo/default/index.html.twig', []);
    }

    ##[Route(path: '/navbar-vertical', name: 'navbar-vertical')]
    public function navbarVertical(): Response
    {
        return $this->render('@Tabler/demo/default/vertical-navbar.html.twig', []);
    }

    ##[Route(path: '/right-to-left', name: 'layout-rtl')]
    public function rightToLeft(ContextHelper $contextHelper): Response
    {
        $contextHelper->setIsRightToLeft(true);

        return $this->render('@Tabler/demo/default/index.html.twig', []);
    }

    ##[Route(path: '/security-centered', name: 'security-centered')]
    public function securityCentered(ContextHelper $contextHelper): Response
    {
        return $this->render('@Tabler/demo/login.html.twig', []);
    }

    ##[Route(path: '/security-cover', name: 'security-cover')]
    public function securityCover(ContextHelper $contextHelper): Response
    {
        return $this->render('@Tabler/demo/login-cover.html.twig', []);
    }
}
