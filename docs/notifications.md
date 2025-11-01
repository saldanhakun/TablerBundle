# Notifications component

## Data Model

In order to use this component, your user class has to implement the `Saldanhakun\TablerBundle\Model\NotificationInterface`:
```php
<?php
namespace App\Model;

use Saldanhakun\TablerBundle\Model\NotificationInterface;

class NotificationModel implements NotificationInterface
{
    // implement interface methods
}
```

The bundle provides the `NotificationModel` as a ready to use implementation of the `NotificationInterface`. 

## EventSubscriber

In case you activated service discovery and auto-wiring in your app, you can write an EventSubscriber which will 
be automatically registered in your container:

```php
<?php

use Saldanhakun\TablerBundle\Event\NotificationEvent;
use Saldanhakun\TablerBundle\Helper\Constants;
use Saldanhakun\TablerBundle\Model\NotificationModel;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class NotificationSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            NotificationEvent::class => ['onNotifications', 100],
        ];
    }

    public function onNotifications(NotificationEvent $event): void
    {
        $event->addNotification(new NotificationModel('1', 'A demo message', Constants::TYPE_SUCCESS));
        $event->addNotification(new NotificationModel('2', 'Another message', Constants::TYPE_ERROR));
        $event->addNotification(new NotificationModel('3', 'Message 3', Constants::TYPE_INFO));
        $event->addNotification(new NotificationModel('4', 'Message 4', Constants::TYPE_WARNING));
        $event->addNotification(new NotificationModel('5', 'Message 5', Constants::TYPE_INFO));
        $event->addNotification(new NotificationModel('6', 'Message 6', Constants::TYPE_SUCCESS));
    }
}
```

## Next steps

Please go back to the [Tabler bundle documentation](index.md) to find out more about using the theme.
