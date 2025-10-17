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
use KevinPapst\TablerBundle\Model\MenuItemModel;
use KevinPapst\TablerBundle\Model\UserModel;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class DemoUserDetailsSubscriber extends AbstractMainMenuBuilder implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            UserDetailsEvent::class => ['onShowUser', 800],
        ];
    }

    protected function isDemoAware(): bool
    {
        return true;
    }

    protected function buildMenu(MenuEvent|UserDetailsEvent $event): void
    {
        $user = $this->accessControl->getUser();

        $model = new UserModel('1', $user->getUserIdentifier());
        $model->setName('admin@example.com');
        $model->setTitle('demo user');
        //$model->setAvatar('bundles/tabler/images/default_avatar.png');

        $event->setUser($model);

        $event->addLink(new MenuItemModel('profile', 'My profile', $this->appRouteHelper->getRouteForDemo('profile')));
        $event->addLink(new MenuItemModel('empty_profile', 'Details (no link)'));
    }
}
