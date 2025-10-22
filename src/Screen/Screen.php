<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen;

use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use KevinPapst\TablerBundle\Screen\Action\AbstractAction;
use KevinPapst\TablerBundle\Screen\Element\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

abstract class Screen extends AbstractController
{
    private string $title = '';
    private string $subTitle = '';
    private AbstractAppRouteHelper $routeHelper;

    public const string SLUG_PATTERN = '/^[\w\-]+$/';
    public const string NUMBER_PATTERN = '/^[0-9]+$/';
    public const string ULID_PATTERN = '/^[\w\d]+$/';

    public function __construct(AbstractAppRouteHelper $routeHelper)
    {
        $this->routeHelper = $routeHelper;
        $this->configure();
    }

    protected function getRouter(): AbstractAppRouteHelper
    {
        return $this->routeHelper;
    }

    protected function configure(): void
    {
        // nop
    }

    public function copyTitles(Screen|AbstractAction $source): self
    {
        return $this
            ->setTitle($source->getTitle())
            ->setSubTitle($source->getSubTitle())
        ;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSubTitle(): string
    {
        return $this->subTitle;
    }

    public function setSubTitle(string $subTitle): self
    {
        $this->subTitle = $subTitle;

        return $this;
    }

    abstract protected function getInnerBreadcrumbs(): iterable;

    public function getBreadcrumbs(): iterable
    {
        if ($this instanceof ParentedScreenInterface) {
            yield from $this->getParentLinks();
        }
        yield from $this->getInnerBreadcrumbs();
    }

    public function handleAction(AbstractAction $action): Response
    {
        $action->execute();
        $params = $action->getTemplateContext();
        $this->appendActionLinks($action, $params);
        $output = $action->getOutput();
        if (empty($output)) {
            return $this
                ->copyTitles($action)
                ->render($action->getTemplate(), $params)
                ;
        }
        elseif ($output instanceof Json) {
            return new JsonResponse($output->getData());
        }
        elseif ($action->getRequestStack()->getMainRequest()->isXmlHttpRequest()) {
            return new Response($output);
        }
        else {
            $params['content'] = $output;
            return $this->render($this->getPageLayout($action), $params);
        }
    }

    protected function getPageLayout(AbstractAction $action): string
    {
        return '@Tabler/layout/page-full.html.twig';
    }

    protected function appendActionLinks(AbstractAction $action, array &$context): void
    {
        if (!\array_key_exists('global_actions', $context)) {
            $context['global_actions'] = [];
        }
        if (!\array_key_exists('bulk_actions', $context)) {
            $context['bulk_actions'] = [];
        }
        if (!\array_key_exists('single_actions', $context)) {
            $context['single_actions'] = [];
        }
    }
}
