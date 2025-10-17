<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber;

use KevinPapst\TablerBundle\Model\MenuItemModel;
use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use KevinPapst\TablerBundle\Screen\BreadCrumbEvent;
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
