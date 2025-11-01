<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

//#[IsGranted(TablerAppAccessControl::ROLE_SUPPORT)]
//#[Route(path: '/demo/{_locale}', name: AbstractAppRouteHelper::DEMO . '.')]
abstract class TablerDocController extends AbstractController
{
    //#[Route(path: '/documentation/{chapter}', name: 'documentation')]
    public function documentation(?string $chapter = null): Response
    {
        if ($chapter === null) {
            $chapter = 'index';
        }

        $docsDir = realpath(__DIR__ . '/../../docs/') . '/';
        $fullUrl = $docsDir . $chapter . '.md';

        if (!file_exists($fullUrl)) {
            throw $this->createNotFoundException();
        }

        $markdown = file_get_contents($fullUrl);
        preg_match_all('/\((.*)\.md\)/', $markdown, $results, PREG_SET_ORDER);
        foreach ($results as $result) {
            $markdown = str_replace($result[0], '(' . $this->generateUrl(DemoController::route('documentation'), ['chapter' => $result[1]]) . ')', $markdown);
        }

        return $this->render('@Tabler/demo/default/documentation.html.twig', [
            'chapter' => $chapter,
            'docs' => $markdown,
        ]);
    }
}
