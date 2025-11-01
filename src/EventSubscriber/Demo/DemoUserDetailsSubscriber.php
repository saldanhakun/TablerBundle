<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\EventSubscriber\Demo;

use Saldanhakun\TablerBundle\Event\MenuEvent;
use Saldanhakun\TablerBundle\Event\UserDetailsEvent;
use Saldanhakun\TablerBundle\EventSubscriber\AbstractMainMenuBuilder;
use Saldanhakun\TablerBundle\Model\MenuItemModel;
use Saldanhakun\TablerBundle\Model\UserModel;
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
