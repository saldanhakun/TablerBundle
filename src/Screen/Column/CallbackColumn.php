<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Column;

class CallbackColumn extends AbstractColumn
{
    private \Closure $callback;

    public function __construct(\Closure $callback)
    {
        $this->callback = $callback;
        parent::__construct();
    }

    public function getCallback(): \Closure
    {
        return $this->callback;
    }

    public function setCallback(\Closure $callback): self
    {
        $this->callback = $callback;

        return $this;
    }

    protected function renderContent(object|array $record): string
    {
        $value = \call_user_func($this->callback, $record);

        return $this->renderContentValue($value);
    }
}
