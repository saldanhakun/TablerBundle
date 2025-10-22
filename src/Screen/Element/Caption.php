<?php

namespace KevinPapst\TablerBundle\Screen\Element;

class Caption extends Element
{

    public const array ACCEPTED_TAGS = [
        'div',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'figcaption',
    ];

    public function __construct(Element|string $content, string $name='div', array $attributes = [])
    {
        parent::__construct($name, $content, $attributes);
    }

    public function getTag(): string
    {
        return $this->getName();
    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

}
