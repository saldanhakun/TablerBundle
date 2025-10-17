<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber\Demo;

use KevinPapst\TablerBundle\EventSubscriber\AbstractMainMenuBuilder;
use KevinPapst\TablerBundle\Event\MenuEvent;
use KevinPapst\TablerBundle\Event\UserDetailsEvent;
use KevinPapst\TablerBundle\Model\MenuItemInterface;
use KevinPapst\TablerBundle\Model\MenuItemModel;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

#[AsEventListener(event: MenuEvent::class, method: 'onSetupNavbar')]
class DemoMenuBuilderSubscriber extends AbstractMainMenuBuilder implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            MenuEvent::class => ['onSetupNavbar', 800],
        ];
    }

    protected function isDemoAware(): bool
    {
        return true;
    }

    protected function buildMenu(MenuEvent|UserDetailsEvent $event): void
    {
        $event->addItem(
            new MenuItemModel('homepage', 'homepage', $this->appRouteHelper->getRouteForDemo('homepage'), [], 'fas fa-tachometer-alt')
        );

        $forms = new MenuItemModel('forms', 'Forms', null, [], 'fab fa-wpforms');
        $forms->setBadgeColor('red');

        $forms->addChild(
            new MenuItemModel('forms', 'Regular', $this->appRouteHelper->getRouteForDemo('forms'), [], 'fab fa-wpforms')
        );
        $forms->addChild(
            new MenuItemModel('sub-demo', 'Horizontal', $this->appRouteHelper->getRouteForDemo('forms-horizontal'), [], 'far fa-arrow-alt-circle-down')
        );
        $formSub = new MenuItemModel('form-second-level', 'Deeper menus', null, [], 'far fa-arrow-alt-circle-right');
        $formSub->addChild(new MenuItemModel('form-second-level2', 'Third level is possible', $this->appRouteHelper->getRouteForDemo('third_level')));
        $formSub->addChild(new MenuItemModel('form-second-level2', 'Third level is possible 2', $this->appRouteHelper->getRouteForDemo('third_level2')));
        $forms->addChild($formSub);

        $event->addItem($forms);

        $components = new MenuItemModel('components', 'Components', null, []);
        $components->addChild(new MenuItemModel('buttons', 'Buttons', $this->appRouteHelper->getRouteForDemo('buttons'), [], 'far fa-save'));
        $components->addChild(new MenuItemModel('timeline', 'Timeline', $this->appRouteHelper->getRouteForDemo('timeline'), [], 'fas fa-stream'));
        $components->addChild(new MenuItemModel('dropdown', 'Dropdown', $this->appRouteHelper->getRouteForDemo('dropdown'), [], 'far fa-save'));
        $components->addChild(new MenuItemModel('alert', 'Alert', $this->appRouteHelper->getRouteForDemo('alert'), [], 'fas fa-exclamation'));
        $components->addChild(new MenuItemModel('callout', 'Callout', $this->appRouteHelper->getRouteForDemo('callout'), [], 'fas fa-exclamation'));
        $components->addChild(new MenuItemModel('offcanvas', 'Offcanvas', $this->appRouteHelper->getRouteForDemo('offcanvas')));
        $components->addChild(new MenuItemModel('modal', 'Modals', $this->appRouteHelper->getRouteForDemo('modal')));
        $components->addChild(new MenuItemModel('status', 'Statuses', $this->appRouteHelper->getRouteForDemo('status')));
        $components->addChild(new MenuItemModel('carousel', 'Carousel', $this->appRouteHelper->getRouteForDemo('carousel')));
        $components->addChild(new MenuItemModel('accordion', 'Accordion', $this->appRouteHelper->getRouteForDemo('accordion')));
        $components->addChild(new MenuItemModel('progressbar', 'Progressbar', $this->appRouteHelper->getRouteForDemo('progressbar')));
        $components->addChild(new MenuItemModel('cardnav', 'Card navigation', $this->appRouteHelper->getRouteForDemo('cardnav')));
        $components->addChild(new MenuItemModel('cardnav_vertical', 'Card navigation (Vertical)', $this->appRouteHelper->getRouteForDemo('cardnav_vertical')));

        $event->addItem($components);

        $layouts = new MenuItemModel('layout', 'Layout', null, []);
        $layouts->addChild(
            new MenuItemModel('full-page', 'Full page layout', $this->appRouteHelper->getRouteForDemo('full-page'), [], 'fas fa-desktop')
        );
        $layouts->addChild(
            new MenuItemModel('navbar-overlapping', 'Overlapping Navbar', $this->appRouteHelper->getRouteForDemo('navbar-overlapping'), [])
        );
        $vertical = new MenuItemModel('navbar-vertical', 'Vertical Navbar', $this->appRouteHelper->getRouteForDemo('navbar-vertical'), []);
        $vertical->setBadge('New');
        $vertical->setBadgeColor('green');
        $layouts->addChild($vertical);
        $layouts->setDivider(true);
        $layouts->addChild(
            new MenuItemModel('RTL', 'Right to left', $this->appRouteHelper->getRouteForDemo('layout-rtl'), [])
        );

        if ($this->accessControl->isDev()) {
            $layouts->addChild(new MenuItemModel('Error 403', 'Error 403', '_preview_error', ['code' => '403'], 'fas fa-exclamation'));
            $layouts->addChild(new MenuItemModel('Error 404', 'Error 404', '_preview_error', ['code' => '404'], 'fas fa-bug'));
            $layouts->addChild(new MenuItemModel('Error 500', 'Error 500', '_preview_error', ['code' => '500'], 'fas fa-bomb'));
        } else {
            $layouts->addChild(new MenuItemModel('Error 403', 'Error 403', $this->appRouteHelper->getRouteForDemo('error403'), [], 'far fa-exclamation'));
            $layouts->addChild(new MenuItemModel('Error 404', 'Error 404', $this->appRouteHelper->getRouteForDemo('error404'), [], 'far fa-bug'));
            $layouts->addChild(new MenuItemModel('Error 500', 'Error 500', $this->appRouteHelper->getRouteForDemo('error500'), [], 'far fa-bomb'));
        }

        $layouts->addChild(new MenuItemModel('Without URL', 'Without URL'));
        $layouts->addChild(new MenuItemModel('Wizard', 'Wizard', $this->appRouteHelper->getRouteForDemo('wizard')));
        $layouts->addChild(new MenuItemModel('login-classic', 'Login (classic)', $this->appRouteHelper->getRouteForDemo('security-centered')));
        $layouts->addChild(new MenuItemModel('login-cover', 'Login (cover)', $this->appRouteHelper->getRouteForDemo('security-cover')));

        $event->addItem($layouts);

        $docu = new MenuItemModel('documentation', 'Documentation', $this->appRouteHelper->getRouteForDemo('documentation'), [], 'far fa-file-alt');
        $docu->setBadgeColor('blue');
        $event->addItem($docu);

        if (!$this->accessControl->isGranted('IS_AUTHENTICATED')) {
            $event->addItem(
                new MenuItemModel('login', 'login', $this->appRouteHelper->security()->loginRoute, [], 'fas fa-sign-in-alt')
            );
        }

        $event->addItem(new MenuItemModel('Empty URL', 'Empty URL'));

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
