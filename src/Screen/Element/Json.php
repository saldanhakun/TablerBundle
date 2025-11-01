<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Element;

class Json extends Element
{
    protected mixed $data;

    public const array ACCEPTED_TAGS = [
        'script',
    ];

    public function __construct(mixed $data)
    {
        parent::__construct('script', '', []);
        $this->setData($data);
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $this->attr['type'] = 'application/json';
    }

    protected function renderContent(): string
    {
        return parent::renderContent();
    }

    public function getData(): mixed
    {
        return $this->data;
    }

    public function setData(mixed $data): self
    {
        $this->data = $data;

        return $this;
    }
}
