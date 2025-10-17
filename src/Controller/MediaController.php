<?php

namespace KevinPapst\TablerBundle\Controller;

use KevinPapst\TablerBundle\Entity\User;
use KevinPapst\TablerBundle\Router\AbstractAppRouteHelper;
use KevinPapst\TablerBundle\Screen\Screen;
use KevinPapst\TablerBundle\Security\TablerAppAccessControl;
use Saldanhakun\DoctrineBundle\Controller\BaseAttachmentController;
use Saldanhakun\DoctrineBundle\Entity\Attachment;
use Saldanhakun\DoctrineBundle\Service\FileHandler;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route(name: AbstractAppRouteHelper::MEDIA . '.')]
class MediaController extends BaseAttachmentController
{
    public function __getUserEntityClass(): string
    {
        return User::class;
    }

    #[Route(path: '/{media}/download', name: 'download', requirements: ['media' => Screen::ULID_PATTERN], methods: ['GET'])]
    public function download(Attachment $media, FileHandler $fileUploader, TablerAppAccessControl $accessControl): Response
    {
        return $this->handleDownload($media, $fileUploader, $accessControl->isDev());
    }

    #[Route(path: '/{media}/integridade', name: 'integrity', requirements: ['media' => Screen::ULID_PATTERN], methods: ['GET'])]
    #[IsGranted(AccessControl::ROLE_USER)]
    public function integrity(Attachment $media, FileHandler $fileUploader, TablerAppAccessControl $accessControl): Response
    {
        return $this->handleIntegrity($media, $fileUploader, $accessControl->isDev());
    }

}
