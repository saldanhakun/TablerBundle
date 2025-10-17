<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Router;

use Saldanhakun\DoctrineBundle\Entity\Attachment;
use Symfony\Component\HttpFoundation\RedirectResponse;

/***
 * @method string download(Attachment $attachment)
 * @method string integrity(Attachment $attachment)
 *
 * @property-read string downloadRoute
 * @property-read string integrityRoute
 *
 * @method RedirectResponse redirectToDownload(Attachment $attachment)
 */
final class MediaRouter extends AbstractRouter
{
    protected function getRoutePrefix(): string
    {
        return AbstractAppRouteHelper::MEDIA;
    }
}
