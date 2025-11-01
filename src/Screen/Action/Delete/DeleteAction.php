<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action\Delete;

use Doctrine\ORM\EntityManagerInterface;
use Gedmo\SoftDeleteable\SoftDeleteable;
use Saldanhakun\TablerBundle\Screen\Action\RecordAction;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Csrf\Exception\TokenNotFoundException;
use Twig\Environment;

class DeleteAction extends RecordAction
{
    private bool $autoFlush = true;

    public function __construct(RequestStack $requestStack, Environment $twig, EntityManagerInterface $entityManager, private readonly ?CsrfTokenManagerInterface $csrfTokenManager = null)
    {
        parent::__construct($requestStack, $twig, $entityManager);
    }

    public function isAutoFlush(): bool
    {
        return $this->autoFlush;
    }

    public function setAutoFlush(bool $autoFlush): self
    {
        $this->autoFlush = $autoFlush;

        return $this;
    }

    protected function preExecute(): void
    {
        parent::preExecute();
        $this->validateCsrf();
        if ($this->getRecord() instanceof SoftDeleteable) {
            if ($this->getRecord()->getDeletedAt() !== null) {
                throw new \LogicException('Já está excluído');
            }
        }
    }

    protected function run(): void
    {
        $this->getEntityManager()->remove($this->getRecord());
    }

    protected function postExecute(): void
    {
        parent::postExecute();
        if ($this->autoFlush) {
            $this->getEntityManager()->flush();
        }
    }

    protected function validateCsrf(): void
    {
        if ($this->csrfTokenManager !== null) {
            $csrf = $this->getRequestStack()->getCurrentRequest()->getPayload()->getString('_token', null);
            if (empty($csrf)) {
                throw new TokenNotFoundException('Proteção CSRF não encontrada.');
            }
            $token = new CsrfToken('delete' . $this->identify($this->getRecord()), $csrf);
            if (!$this->csrfTokenManager->isTokenValid($token)) {
                throw new TokenNotFoundException('Proteção CSRF inválida.');
            }
        }
    }

    public function getTemplate(): string
    {
        throw new \LogicException('Sem template');
    }

    public function getTitle(): string
    {
        if ($this->getDescriber()) {
            return 'Exclusão de ' . $this->getDescriber()->getOf(false);
        } else {
            return 'Exclusão';
        }
    }
}
