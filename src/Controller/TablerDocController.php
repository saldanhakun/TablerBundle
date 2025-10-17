<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

##[IsGranted(TablerAppAccessControl::ROLE_SUPPORT)]
##[Route(path: '/demo/{_locale}', name: AbstractAppRouteHelper::DEMO . '.')]
abstract class TablerDocController extends AbstractController
{
    ##[Route(path: '/documentation/{chapter}', name: 'documentation')]
    public function documentation(?string $chapter = null): Response
    {
        if ($chapter === null) {
            $chapter = 'index';
        }

        $docsDir = realpath(__DIR__ . '/../../vendor/kevinpapst/tabler-bundle/docs/') . '/';
        $fullUrl = $docsDir . $chapter . '.md';

        if (!file_exists($fullUrl)) {
            throw $this->createNotFoundException();
        }

        $markdown = file_get_contents($fullUrl);
        preg_match_all('/\((.*)\.md\)/', $markdown, $results, PREG_SET_ORDER);
        foreach ($results as $result) {
            $markdown = str_replace($result[0], '(' . $this->generateUrl(DemoController::route('documentation'), ['chapter' => $result[1]]) . ')', $markdown);
        }

        return $this->render('demo/default/documentation.html.twig', [
            'chapter' => $chapter,
            'docs' => $markdown,
        ]);
    }

}
