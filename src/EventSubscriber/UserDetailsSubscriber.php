<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber;

use KevinPapst\TablerBundle\Entity\User;
use KevinPapst\TablerBundle\Event\MenuEvent;
use KevinPapst\TablerBundle\Event\UserDetailsEvent;
use KevinPapst\TablerBundle\Model\UserModel;
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

            $this->createItem($event, 'profile', "Meu perfil", $this->appRouteHelper->security()->profileRoute);
        }
    }
}
