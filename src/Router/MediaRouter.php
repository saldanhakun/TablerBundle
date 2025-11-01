<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Router;

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
