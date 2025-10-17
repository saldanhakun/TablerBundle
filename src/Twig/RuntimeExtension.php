<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de).
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace KevinPapst\TablerBundle\Twig;

use KevinPapst\TablerBundle\Event\MenuEvent;
use KevinPapst\TablerBundle\Event\NotificationEvent;
use KevinPapst\TablerBundle\Event\UserDetailsEvent;
use KevinPapst\TablerBundle\Helper\ContextHelper;
use KevinPapst\TablerBundle\Model\MenuItemInterface;
use KevinPapst\TablerBundle\Screen\BreadCrumbEvent;
use KevinPapst\TablerBundle\Screen\Screen;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Intl\Locales;
use Twig\Extension\RuntimeExtensionInterface;

final class RuntimeExtension implements RuntimeExtensionInterface
{
    /**
     * @var string[]
     */
    private array $locales;

    /**
     * @param array<string, string|null> $routes
     * @param array<string, string> $icons
     */
    public function __construct(
        private readonly EventDispatcherInterface $eventDispatcher,
        private readonly ContextHelper $helper,
        private readonly array $routes,
        private readonly array $icons,
        string $locales
    ) {
        $this->locales = explode('|', trim($locales));
    }

    public function getRouteByAlias(string $routeName): string
    {
        // this does not throw an exception on unknown routes, because those could be injected via events!
        return $this->routes[$routeName] ?? $routeName;
    }

    public function bodyClass(string $class = ''): string
    {
        return $class;
    }

    public function theme(): string
    {
        if ($this->helper->isDarkMode()) {
            return 'dark';
        }

        return 'light';
    }

    public function assetVersion(): string
    {
        return $this->helper->getAssetVersion();
    }

    public function containerClass(string $class = ''): string
    {
        $classList = explode(' ', $class);

        if ($this->helper->isBoxedLayout()) {
            $classList[] = 'container-xl';
        } else {
            $classList[] = 'container-fluid';
        }

        return trim(implode(' ', $classList));
    }

    /**
     * @param Request $request
     *
     * @return MenuItemInterface[]|null
     */
    public function getMenu(Request $request): ?array
    {
        if (!$this->eventDispatcher->hasListeners(MenuEvent::class)) {
            return null;
        }

        /** @var MenuEvent $event */
        $event = $this->eventDispatcher->dispatch(new MenuEvent($request));

        return $event->getItems();
    }

    public function getNotifications(): NotificationEvent
    {
        if (!$this->eventDispatcher->hasListeners(NotificationEvent::class)) {
            return new NotificationEvent(false);
        }

        /** @var NotificationEvent $listEvent */
        $listEvent = $this->eventDispatcher->dispatch(new NotificationEvent());

        return $listEvent;
    }

    public function getUserDetails(): ?UserDetailsEvent
    {
        if (!$this->eventDispatcher->hasListeners(UserDetailsEvent::class)) {
            return null;
        }

        /** @var UserDetailsEvent $userEvent */
        $userEvent = $this->eventDispatcher->dispatch(new UserDetailsEvent());

        if ($userEvent->getUser() === null) {
            return null;
        }

        return $userEvent;
    }

    public function createIcon(string $name, bool $withIconClass = false, ?string $default = null): string
    {
        return '<i class="' . $this->icon($name, $withIconClass, $default) . '"></i>';
    }

    public function icon(string $name, bool $withIconClass = false, ?string $default = null): string
    {
        return ($withIconClass ? 'icon ' : '') . ($this->icons[str_replace('-', '_', $name)] ?? ($default ?? $name));
    }

    public function uniqueId(string $prefix = '', bool $more_entropy = false): string
    {
        return uniqid($prefix, $more_entropy);
    }

    /**
     * @return string[]
     */
    public function getLocales(): array
    {
        return $this->locales;
    }

    public function markdown(string $markdown): string
    {
        $parser = new \Parsedown();

        return $parser->parse($markdown);
    }

    public function getLanguageName(string $language): string
    {
        return ucfirst(Locales::getName($language, $language));
    }

    /**
     * @return MenuItemInterface[]
     */
    public function getBreadcrumbs(Screen $screen, Request $request): ?array
    {
        if (!$this->eventDispatcher->hasListeners(BreadCrumbEvent::class)) {
            return null;
        }

        /** @var BreadCrumbEvent $event */
        $event = $this->eventDispatcher->dispatch(new BreadCrumbEvent($screen, $request));

        return $event->getItems();
    }
}
