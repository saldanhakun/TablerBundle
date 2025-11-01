<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Action;

use Saldanhakun\DoctrineBundle\Describer\BaseDescriber;
use Saldanhakun\TablerBundle\Screen\AbstractUi;
use Saldanhakun\TablerBundle\Screen\Element\Element;
use Saldanhakun\TablerBundle\Screen\Screen;
use Symfony\Component\Uid\Ulid;

abstract class AbstractAction extends AbstractUi
{
    private ?BaseDescriber $describer = null;
    private ?Screen $screen = null;
    private ?string $entryPoint = null;
    protected ?Element $output = null;

    protected function identify(object $record): string
    {
        $id = $record->getId();
        if ($id instanceof Ulid) {
            return strtolower($id->toBase32());
        } else {
            return \strval($id);
        }
    }

    public function getDescriber(): ?BaseDescriber
    {
        return $this->describer;
    }

    public function setDescriber(?BaseDescriber $describer): self
    {
        $this->describer = $describer;

        return $this;
    }

    public function getEntryPoint(): ?string
    {
        return $this->entryPoint;
    }

    public function setEntryPoint(?string $entryPoint): self
    {
        $this->entryPoint = $entryPoint;

        return $this;
    }

    public function getScreen(): ?Screen
    {
        return $this->screen;
    }

    public function setScreen(?Screen $screen): self
    {
        $this->screen = $screen;

        return $this;
    }

    protected function preExecute(): void
    {
        $this->_params = array_merge(array_filter([
            'action' => $this,
            'screen' => $this->getScreen(),
            'describer' => $this->getDescriber(),
            'entrypoint' => $this->getEntryPoint(),
        ]), $this->getFixedParams());
    }

    abstract protected function run(): void;

    protected function postExecute(): void
    {
        // nop
    }

    public function execute(): self
    {
        $this->preExecute();
        $this->run();
        $this->postExecute();

        return $this;
    }

    public function isGlobalAction(): bool
    {
        return false;
    }

    public function isBulkAction(): bool
    {
        return false;
    }

    public function isSingleAction(): bool
    {
        return false;
    }

    abstract public function getTitle(): string;

    public function getSubTitle(): string
    {
        return '';
    }

    public function getOutput(): ?Element
    {
        return $this->output;
    }
}
