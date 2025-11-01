<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\EventSubscriber;

use Saldanhakun\TablerBundle\Entity\User;
use Saldanhakun\TablerBundle\Event\MenuEvent;
use Saldanhakun\TablerBundle\Event\UserDetailsEvent;
use Saldanhakun\TablerBundle\Model\UserModel;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class UserDetailsSubscriber extends AbstractMainMenuBuilder implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            UserDetailsEvent::class => ['onShowUser', 100],
        ];
    }

    protected function buildMenu(MenuEvent|UserDetailsEvent $event): void
    {
        $user = $this->accessControl->getUser();
        if ($user instanceof User) {
            $model = new UserModel($user->getId(), $user->getUserIdentifier());
            $model->setName($user->getDisplayName());
            $model->setTitle($this->accessControl->getMainRoleName($user));
            //$model->setAvatar('bundles/tabler/images/default_avatar.png');

            $event->setUser($model);

            $this->createItem($event, 'profile', 'Meu perfil', $this->appRouteHelper->security()->profileRoute);
        }
    }
}
