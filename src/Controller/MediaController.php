<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Controller;

use Saldanhakun\DoctrineBundle\Controller\BaseAttachmentController;
use Saldanhakun\DoctrineBundle\Entity\Attachment;
use Saldanhakun\DoctrineBundle\Service\FileHandler;
use Saldanhakun\TablerBundle\Entity\User;
use Saldanhakun\TablerBundle\Router\AbstractAppRouteHelper;
use Saldanhakun\TablerBundle\Screen\Screen;
use Saldanhakun\TablerBundle\Security\TablerAppAccessControl;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

//#[Route(name: AbstractAppRouteHelper::MEDIA . '.')]
abstract class MediaController extends BaseAttachmentController
{
    public function __getUserEntityClass(): string
    {
        return User::class;
    }

    //#[Route(path: '/{media}/download', name: 'download', requirements: ['media' => Screen::ULID_PATTERN], methods: ['GET'])]
    public function download(Attachment $media, FileHandler $fileUploader, TablerAppAccessControl $accessControl): Response
    {
        return $this->handleDownload($media, $fileUploader, $accessControl->isDev());
    }

    //#[Route(path: '/{media}/integridade', name: 'integrity', requirements: ['media' => Screen::ULID_PATTERN], methods: ['GET'])]
    //#[IsGranted(AccessControl::ROLE_USER)]
    public function integrity(Attachment $media, FileHandler $fileUploader, TablerAppAccessControl $accessControl): Response
    {
        return $this->handleIntegrity($media, $fileUploader, $accessControl->isDev());
    }
}
