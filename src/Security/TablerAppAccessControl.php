<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Security;

use Doctrine\ORM\EntityManagerInterface;
use Saldanhakun\TablerBundle\Entity\User;
use Saldanhakun\TablerBundle\Repository\UserRepository;
use Saldanhakun\TablerBundle\Router\AbstractAppRouteHelper;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\SwitchUserToken;
use Symfony\Component\Security\Core\Authorization\AccessDecision;
use Symfony\Component\Security\Core\User\UserInterface;

abstract class TablerAppAccessControl
{
    public const string ROLE_USER = 'ROLE_USER';
    public const string ROLE_API = 'ROLE_API';
    public const string ROLE_ADMIN = 'ROLE_ADMIN';
    public const string ROLE_SUPPORT = 'ROLE_SUPPORT';

    protected const string ROLE_ALLOWED_TO_SWITCH = 'ROLE_ALLOWED_TO_SWITCH';
    protected const string SWITCH_USER_PARAM = 'ghost18178';

    protected const array CORE_ROLES = [
        self::ROLE_USER => 'Usuário comum',
        self::ROLE_API => 'Usuário de API',
        self::ROLE_ADMIN => 'Administrador da Aplicação',
        self::ROLE_SUPPORT => 'Agente de Suporte',
    ];

    public const string ENV_DEVELOPMENT = 'dev';
    public const string ENV_TESTING = 'test';
    public const string ENV_PRODUCTION = 'prod';

    public function __construct(
        private readonly Security $security,
        private readonly KernelInterface $kernel,
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function getEnvironment(): string
    {
        return $this->kernel->getEnvironment();
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->entityManager;
    }

    public function isDev(): bool
    {
        return $this->kernel->getEnvironment() === self::ENV_DEVELOPMENT;
    }

    public function isTest(): bool
    {
        return $this->kernel->getEnvironment() === self::ENV_TESTING;
    }

    public function isProd(): bool
    {
        return $this->kernel->getEnvironment() === self::ENV_PRODUCTION;
    }

    public function isGranted(mixed $attributes, mixed $subject = null, ?AccessDecision $accessDecision = null): bool
    {
        return $this->security->isGranted($attributes, $subject, $accessDecision);
    }

    // Verifica se um usuário está logado no momento
    public function isLoggedIn(bool $strict = false): bool
    {
        if ($strict) {
            return $this->security->isGranted('IS_AUTHENTICATED_FULLY');
        } else {
            return $this->security->isGranted('IS_AUTHENTICATED_REMEMBERED');
        }
    }

    // Verifica se um usuário foi autenticado por uma memória de Cookie
    public function isRemembered(): bool
    {
        return $this->security->isGranted('IS_REMEMBERED');
    }

    // Verifica se o usuário atual está sendo personificado
    public function isImpersonated(): bool
    {
        // The current token is a SwitchUserToken, meaning impersonation is active.
        $token = $this->security->getToken();

        return $token instanceof SwitchUserToken;
    }

    // Retorna o usuário que está impersonando o atual
    public function getImpersonator(): ?UserInterface
    {
        $token = $this->security->getToken();

        if ($token instanceof SwitchUserToken) {
            // Get the original token to access the impersonator user.
            $originalToken = $token->getOriginalToken();

            return $originalToken->getUser();
        }

        // No impersonation is active, or the token is not a SwitchUserToken.
        return null;
    }

    public function getUserSwitch(?UserInterface $targetUser, ?string $urlAfter = null, array $routeParams = []): string
    {
        if (empty($urlAfter)) {
            $url = $this->urlGenerator->generate(AbstractAppRouteHelper::START);
        } elseif (!str_contains($urlAfter, '/')) {
            $url = $this->urlGenerator->generate($urlAfter, $routeParams);
        } else {
            $url = $urlAfter;
        }
        $glue = str_contains($url, '?') ? '&' : '?"';
        if ($targetUser === null) {
            return $url . $glue . self::SWITCH_USER_PARAM . '=';
        } else {
            return $url . $glue . self::SWITCH_USER_PARAM . '=' . $targetUser->getUserIdentifier();
        }
    }

    protected function strictIgnoreSupport(bool $strict): bool
    {
        if ($strict) {
            return !$this->isSupport();
        }

        return true;
    }

    public function isApi(bool $strict = false): bool
    {
        return $this->security->isGranted(self::ROLE_API) && $this->strictIgnoreSupport($strict);
    }

    public function isAdmin(bool $strict = false): bool
    {
        return $this->security->isGranted(self::ROLE_ADMIN) && $this->strictIgnoreSupport($strict);
    }

    public function isSupport(): bool
    {
        return $this->security->isGranted(self::ROLE_SUPPORT);
    }

    public function getUser(): ?UserInterface
    {
        return $this->security->getUser();
    }

    public function getUserProfile(): ?User
    {
        $user = $this->security->getUser();
        if ($user instanceof User) {
            return $user;
        }

        return null;
    }

    public function getMainRoleOf(UserInterface $user): ?string
    {
        $roles = $user->getRoles();
        $priority = array_reverse(array_keys($this->getRoles()));
        foreach ($priority as $role) {
            if (\in_array($role, $roles, true)) {
                return $role;
            }
        }

        return null;
    }

    public function getMainRoleName(UserInterface $user): string
    {
        $role = $this->getMainRoleOf($user);
        if ($role !== null) {
            return $this->getRoles()[$role];
        } else {
            return '';
        }
    }

    public function getRoles(): array
    {
        return self::CORE_ROLES;
    }
}
