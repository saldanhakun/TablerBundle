<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Form\Extension;

use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CheckboxCustomizer extends AbstractTypeExtension
{
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefaults([
                'required' => false,
                'description' => null,
                'use_switch' => true,
            ])
            ->setAllowedTypes('use_switch', ['bool'])
            ->setRequired('use_switch')
            ->setAllowedTypes('description', ['string', 'null']);
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        parent::buildView($view, $form, $options);
        $label_attr = $view->vars['label_attr'] ?? [];
        if ($options['use_switch']) {
            $label_attr['class'] = implode(' ', array_merge(explode(' ', $label_attr['class'] ?? ''), ['checkbox-switch']));
        }

        $view->vars = array_replace($view->vars, [
            'label_attr' => $label_attr,
            'description' => $options['description'],
        ]);
    }

    /**
     * Return the class of the type being extended.
     */
    public static function getExtendedTypes(): iterable
    {
        // use FormType::class to modify (nearly) every field in the system
        return [CheckboxType::class];
    }
}
