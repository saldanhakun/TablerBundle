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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

//#[Route(name: AbstractAppRouteHelper::SECURITY . '.')]
abstract class SecurityController extends AbstractController
{
    //#[Route(path: '/entrar', name: 'login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authenticationUtils, AbstractAppRouteHelper $appRouteHelper): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute($appRouteHelper->startRoute);
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('@Tabler/security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    //#[Route(path: '/sair', name: 'logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    //#[Route(path: '/perfil', name: 'profile', methods: ['GET', 'POST'])]
    //#[IsGranted(TablerAppAccessControl::ROLE_USER)]
    public function profile(TablerAppAccessControl $accessControl): Response
    {
        return $this->render('@Tabler/security/profile.html.twig', ['profile' => $accessControl->getUserProfile()]);
    }

    //#[Route(path: '/recuperar-senha', name: 'reset', methods: ['GET', 'POST'])]
    public function reset(TablerAppAccessControl $accessControl): Response
    {
        return $this->render('@Tabler/security/profile.html.twig', ['profile' => $accessControl->getUserProfile()]);
    }

    //#[Route(path: '/gerar-senha-forte', name: 'generate_password', methods: ['POST'])]
    public function generatePassword(): Response
    {
        return $this->json([
            'ok' => true,
            'password' => uniqid(),
        ]);
    }
}
