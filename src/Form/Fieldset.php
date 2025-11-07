<?php

namespace Saldanhakun\TablerBundle\Form;

use Saldanhakun\DoctrineBundle\Describer\BaseDescriber;
use Saldanhakun\TablerBundle\Enum\FieldsetPlacementEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Twig\TemplateWrapper;

abstract class Fieldset extends \ArrayObject
{

    private $assumeActions = false;
    private FieldsetPlacementEnum $placement = FieldsetPlacementEnum::NONE;

    abstract public function getLabel(): string;

    public function getDescription(): string
    {
        return '';
    }

    public function push(FormView $view, FormInterface $form): static
    {
        $this->append(['view' => $view, 'form' => $form]);
        return $this;
    }

    public function getRootForm(): ?FormInterface
    {
        if ($this->count() > 0) {
            return $this[0]['form']->getRoot();
        }
        return null;
    }

    protected function getDescriberFromRoot(): ?BaseDescriber
    {
        $root = $this->getRootForm();
        if ($root) {
            $describer = $root->getConfig()->getOption('describer', false);
            if ($describer instanceof BaseDescriber) {
                return $describer;
            }
        }
        return null;
    }

    public function getAssumeActions(): bool
    {
        return $this->assumeActions;
    }

    public function setAssumeActions(bool $assumeActions): static
    {
        $this->assumeActions = $assumeActions;
        return $this;
    }

    public function getPlacement(): FieldsetPlacementEnum
    {
        return $this->placement;
    }

    public function setPlacement(FieldsetPlacementEnum $placement): static
    {
        $this->placement = $placement;
        return $this;
    }

}
