<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen;

use KevinPapst\TablerBundle\Model\MenuItemModel;

abstract class Module extends Screen
{

    protected function getInnerBreadcrumbs(): iterable
    {
        yield new MenuItemModel(
            constant(get_class($this)."::MODULE_ROUTE_PREFIX"),
            constant(get_class($this)."::NAME"),
            null,
            [],
            constant(get_class($this)."::ICON")
        );
    }

    protected function configure(): void
    {
        parent::configure();
        $this->setTitle(constant(get_class($this)."::NAME"));
    }
}
