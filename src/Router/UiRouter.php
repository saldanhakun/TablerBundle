<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Router;

/***
 * @method string lightTheme()
 * @method string darkTheme()
 *
 * @method string getRouteForLightTheme()
 * @method string getRouteForDarkTheme()
 */
final class UiRouter extends AbstractRouter
{
    protected function getRoutePrefix(): string
    {
        return AbstractAppRouteHelper::UI;
    }
}
