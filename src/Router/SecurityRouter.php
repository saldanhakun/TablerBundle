<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Router;

use Symfony\Component\HttpFoundation\RedirectResponse;

/***
 * @method string login()
 * @method string logout()
 * @method string profile()
 * @method string registration()
 * @method string generatePassword()
 * @method string verifyEmail(string $email)
 *
 * @property-read string loginRoute
 * @property-read string logoutRoute
 * @property-read string profileRoute
 * @property-read string registrationRoute
 * @property-read string generatePasswordRoute
 * @property-read string verifyEmailRoute
 *
 * @method RedirectResponse redirectToLogin()
 * @method RedirectResponse redirectToProfile()
 * @method RedirectResponse redirectToRegistration()
 */
final class SecurityRouter extends AbstractRouter
{
    protected function getRoutePrefix(): string
    {
        return AbstractAppRouteHelper::SECURITY;
    }
}
