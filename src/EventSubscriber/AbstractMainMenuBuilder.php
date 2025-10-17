<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber;

use KevinPapst\TablerBundle\Controller\DemoController;
use KevinPapst\TablerBundle\Event\MenuEvent;
use KevinPapst\TablerBundle\Event\UserDetailsEvent;
use KevinPapst\TablerBundle\Model\MenuItemInterface;
use KevinPapst\TablerBundle\Model\MenuItemModel;
use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use KevinPapst\TablerBundle\Security\TablerAppAccessControl;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\String\Slugger\SluggerInterface;

abstract class AbstractMainMenuBuilder
{
    public function __construct(
        protected readonly TablerAppAccessControl $accessControl,
        protected readonly RequestStack $requestStack,
        protected readonly AbstractAppRouteHelper $appRouteHelper,
        protected readonly SluggerInterface $slugger
    ) {
    }

    protected function isDemoAware(): bool
    {
        return false;
    }

    protected function maybeDieInDemo(): bool
    {
        $request = $this->requestStack->getCurrentRequest();
        if (DemoController::isDemo($request)) {
            if (!$this->accessControl->isGranted(TablerAppAccessControl::ROLE_SUPPORT)) {
                return true;
            }
            return !$this->isDemoAware();
        }
        else {
            return $this->isDemoAware();
        }
    }

    abstract protected function buildMenu(MenuEvent|UserDetailsEvent $event): void;

    public function onSetupNavbar(MenuEvent $event): void
    {
        if ($this->maybeDieInDemo()) {
            return;
        }
        $this->buildMenu($event);

        $this->activateByRoute(
            $event->getRequest()->get('_route'),
            $event->getItems()
        );
    }

    public function onShowUser(UserDetailsEvent $event): void
    {
        if ($this->maybeDieInDemo()) {
            return;
        }
        $user = $this->accessControl->getUser();
        if (null === $user) {
            return;
        }

        $this->buildMenu($event);
    }

    protected function createItem(
        MenuEvent|UserDetailsEvent $event,
        string $identifier,
        string $label,
        ?string $route = null,
        array $routeArgs = [],
        ?string $icon = null
    ): MenuItemInterface
    {
        $item = new MenuItemModel($identifier, $label, $route, $routeArgs, $icon);
        if ($event instanceof UserDetailsEvent) {
            $event->addLink($item);
        }
        else {
            $event->addItem($item);
        }
        return $item;
    }

    protected function createSpacer(MenuEvent|UserDetailsEvent $event, string $label, ?string $icon=null): MenuItemInterface
    {
        return $this->createItem($event, $this->slugger->slug($label).uniqid(), $label, null, [], $icon);
    }

    /**
     * @param string $route
     * @param MenuItemInterface[] $items
     */
    protected function activateByRoute(string $route, array $items): void
    {
        foreach ($items as $item) {
            if ($item->hasChildren()) {
                $this->activateByRoute($route, $item->getChildren());
            } elseif ($item->getRoute() == $route) {
                $item->setIsActive(true);
            }
        }
    }
}
