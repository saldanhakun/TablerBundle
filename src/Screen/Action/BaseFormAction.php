<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Environment;

abstract class BaseFormAction extends RecordAction
{
    private ?FormInterface $form;
    private bool $autoFlush = true;
    private ?\Closure $postAssignCallback = null;
    private bool $isSubmitted = false;
    private bool $isValid = false;

    public function __construct(
        RequestStack $requestStack,
        Environment $twig,
        EntityManagerInterface $entityManager,
        private readonly FormFactoryInterface $formFactory
    ) {
        parent::__construct($requestStack, $twig, $entityManager);
        $this->setEntryPoint('bundles/tabler/crud-form');
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

    public function isSubmitted(): bool
    {
        return $this->isSubmitted;
    }

    public function isValid(): bool
    {
        return $this->isValid;
    }

    public function getPostAssignCallback(): ?\Closure
    {
        return $this->postAssignCallback;
    }

    public function setPostAssignCallback(?\Closure $postAssignCallback): self
    {
        $this->postAssignCallback = $postAssignCallback;

        return $this;
    }

    protected function preExecute(): void
    {
        parent::preExecute();
        if ($this->form === null) {
            throw new LogicException('Formulário não inicializado');
        }
    }

    protected function postExecute(): void
    {
        if ($this->autoFlush && $this->isValid) {
            $this->getEntityManager()->flush();
        }
    }

    public function getForm(): ?FormInterface
    {
        return $this->form;
    }

    public function setForm(?FormInterface $form): self
    {
        $this->form = $form;

        return $this;
    }

    public function createForm(string $formClass, ?object $record = null, array $options = []): self
    {
        if ($record === null) {
            $record = $this->getRecord();
        } else {
            $this->setRecord($record);
        }
        $this->form = $this->formFactory->create($formClass, $record, $options);

        return $this;
    }

    protected function postAssignment(): void
    {
        if ($this->postAssignCallback !== null) {
            \call_user_func($this->postAssignCallback, $this->getRecord());
        }
    }

    public function run(): void
    {
        $this->form->handleRequest($this->getRequestStack()->getCurrentRequest());

        $this->isSubmitted = $this->form->isSubmitted();
        $this->isValid = false;
        if ($this->isSubmitted && $this->form->isValid()) {
            $this->isValid = true;
            if ($this->getRecord() === null) {
                $this->setRecord($this->form->getData());
            }
            $this->postAssignment();
            $this->getEntityManager()->persist($this->getRecord());
        }
        $this->_params['form'] = $this->form->createView();
    }
}
