<?php

namespace KevinPapst\TablerBundle\Form;

use KevinPapst\TablerBundle\Entity\User;
use KevinPapst\TablerBundle\Form\Widget\TwigType;
use KevinPapst\TablerBundle\Security\TablerAppAccessControl;
use Saldanhakun\DoctrineBundle\Entity\Attachment;
use KevinPapst\TablerBundle\Repository\UserRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AttachmentCrudForm extends AbstractType
{
    public function __construct(private readonly TablerAppAccessControl $accessControl, private readonly UserRepository $userRepository)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($options) {
            $form = $event->getForm();
            /** @var Attachment $file */
            $file = $event->getData();
            $creating = !$file || $file->getId() === null;
            if (!$creating) {
                $form
                    ->add('uploaded', TwigType::class, [
                        'label' => 'Arquivo Atual',
                        'mapped' => false,
                        'template' => '@BetterApp/ace/theme/file_describer.html.twig',
                        'template_parameters' => [
                            'media' => $file
                        ]
                    ]);
            }
            if ($creating) {
                if ($options['allow_upload']) {
                    $form
                        ->add('upload', FileType::class, [
                            'label' => "Novo Arquivo",
                            'required' => $options['required'],
                            'mapped' => false,
                        ]);
                }
                if ($options['allow_remote']) {
                    $form
                        ->add('originalFileName', UrlType::class, [
                            'label' => "Link",
                            'required' => $options['required'],
                        ]);
                }
            }
            else {
                if ($options['allow_upload'] || !$file->getIsRemote()) {
                    if ($options['allow_replace']) {
                        $form
                            ->add('upload', FileType::class, [
                                'label' => "Arquivo",
                                'required' => false,
                                'mapped' => false,
                            ]);
                    }
                }
                if ($options['allow_remote'] || $file->getIsRemote()) {
                    $form
                        ->add('originalFileName', UrlType::class, [
                            'label' => "Link",
                            'required' => !$options['allow_upload'],
                        ]);
                }
            }
            $form
                ->add('owner', EntityType::class, [
                    'label' => 'Proprietário',
                    'required' => false,
                    'class' => User::class,
                    'query_builder' => $this->getUserList(),
                    'disabled' => !$creating
                ])
                ->add('category', TextType::class, [
                    'label' => 'Categoria',
                ])
                ->add('annotation', TextareaType::class, [
                    'label' => 'Anotações',
                    'required' => false,
                    'attr' => [
                        'rows' => 3,
                        'class' => 'maxlength-helper',
                        'maxlength' => 255,
                    ]
                ])
                ->add('isPrivate', null, [
                    'label' => 'Uso privado',
                ])
                ->add('role', ChoiceType::class, [
                    'label' => 'Permissão',
                    'required' => false,
                    'placeholder' => "(nenhuma permissão necessária)",
                    'choices' => array_flip(TablerAppAccessControl::ROLES),
                ]);
            if (!$creating) {
                $form
                    ->add('checksum', TwigType::class, [
                        'label' => 'Integridade',
                        'template' => '@BetterApp/ace/theme/file_integrity.html.twig',
                        'template_parameters' => [
                            'media' => $file
                        ]
                    ]);
            }
        });
    }

    private function getUserList(): ?QueryBuilder
    {
        $qb = null;
        if (!$this->accessControl->isDev()) {
            $qb = $this->userRepository->getUsersQueryBuilder(true, $this->accessControl->getUser(), null);
        }
        return $qb;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Attachment::class,
            'allow_replace' => true,
            'allow_remote' => false,
            'allow_upload' => true,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return 'AttachmentType';
    }
}
