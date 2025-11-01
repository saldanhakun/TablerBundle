<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Router;

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
