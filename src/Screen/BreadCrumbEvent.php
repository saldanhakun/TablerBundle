<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen;

use KevinPapst\TablerBundle\Event\MenuEvent;
use Symfony\Component\HttpFoundation\Request;

class BreadCrumbEvent extends MenuEvent
{
    public function __construct(private readonly Screen $screen, Request $request)
    {
        parent::__construct($request);
    }

    public function getScreen(): Screen
    {
        return $this->screen;
    }
}
