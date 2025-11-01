<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\EventSubscriber;

use Saldanhakun\TablerBundle\Model\MenuItemModel;
use Saldanhakun\TablerBundle\Router\AbstractAppRouteHelper;
use Saldanhakun\TablerBundle\Screen\BreadCrumbEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

#[AsEventListener(event: BreadCrumbEvent::class, method: 'onSetupBreadcrumb')]
class BreadcrumbBuilderSubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly AbstractAppRouteHelper $appRouteHelper)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            BreadCrumbEvent::class => ['onSetupBreadcrumb', 100],
        ];
    }

    public function onSetupBreadcrumb(BreadCrumbEvent $event): void
    {
        $event->addItem(new MenuItemModel('homepage', 'Início', $this->appRouteHelper->startRoute, [], 'fas fa-home'));

        $screen = $event->getScreen();
        /*** @var \Generator $items */
        $items = $screen->getBreadcrumbs();
        foreach ($items as $item) {
            $event->addItem($item);
        }
        $event->addItem(new MenuItemModel('current_action', $screen->getTitle(), null));
    }
}
