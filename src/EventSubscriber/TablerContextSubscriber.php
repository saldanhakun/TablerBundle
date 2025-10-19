<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\EventSubscriber;

use KevinPapst\TablerBundle\Helper\ContextHelper;
use Symfony\Component\Asset\Package;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Asset\VersionStrategy\JsonManifestVersionStrategy;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\KernelInterface;

final class TablerContextSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly ContextHelper $contextHelper,
        private readonly Packages $packages,
        private readonly KernelInterface $kernel,
        private readonly RequestStack $requestStack
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['prepareEnvironment', -100],
        ];
    }

    public function prepareEnvironment(RequestEvent $event): void
    {
        if (!$event->isMainRequest()) {
            return;
        }

        $app = new Package(new JsonManifestVersionStrategy($this->kernel->getProjectDir() . '/public/build/manifest.json'));
        $this->packages->addPackage('app', $app);
        //$this->contextHelper->setLogoUrl($app->getUrl('build/images/main-logo.png'));

        $theme = $this->requestStack->getSession()->get('theme');
        if ($theme === null) {
            return;
        }

        $this->contextHelper->setIsDarkMode($theme === 'dark');
    }
}
