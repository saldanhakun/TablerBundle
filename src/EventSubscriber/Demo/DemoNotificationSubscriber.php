<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber\Demo;

use KevinPapst\TablerBundle\Controller\DemoController;
use KevinPapst\TablerBundle\Event\NotificationEvent;
use KevinPapst\TablerBundle\Helper\Constants;
use KevinPapst\TablerBundle\Model\NotificationModel;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

/**
 * Class NotificationSubscriber adds notification messages to the top bar.
 */
class DemoNotificationSubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly AuthorizationCheckerInterface $security, private readonly RequestStack $requestStack)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            NotificationEvent::class => ['onNotifications', 100],
        ];
    }

    public function onNotifications(NotificationEvent $event): void
    {
        if (!DemoController::isDemo($this->requestStack->getMainRequest())) {
            return;
        }
        $event->addNotification(new NotificationModel('1', 'A demo message', Constants::TYPE_SUCCESS));
        $event->addNotification(new NotificationModel('2', 'Another message', Constants::TYPE_ERROR));
        $event->addNotification(new NotificationModel('3', 'Message 3', Constants::TYPE_INFO));
        $event->addNotification(new NotificationModel('4', 'Message 4', Constants::TYPE_WARNING));
        $event->addNotification(new NotificationModel('5', 'Message 5', Constants::TYPE_INFO));
        $event->addNotification(new NotificationModel('6', 'Message 6', Constants::TYPE_SUCCESS));

        if (!$this->security->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
            return;
        }

        $event->addNotification(new NotificationModel('6', 'You are logged-in!', Constants::TYPE_SUCCESS));
    }
}
