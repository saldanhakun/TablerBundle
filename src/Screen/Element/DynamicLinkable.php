<?php

namespace KevinPapst\TablerBundle\Screen\Element;

use KevinPapst\TablerBundle\Screen\Column\BasePropertyColumn;
use KevinPapst\TablerBundle\Screen\Element\Data\AbstractRecordData;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class DynamicLinkable extends Element
{
    use UiRoutableTrait;

    public const array ACCEPTED_TAGS = [
        'a',
        'button',
    ];
    private array $linkRoutePlaceholders = ['id' => 'id'];
    private ?AbstractRecordData $dataLink=null;

    public function __construct(Element|string $content, string $route, array $routeArgs = [], array $placeholders = [])
    {
        parent::__construct('a', $content, []);
        $this
            ->setRoute($route)
            ->setRouteParams($routeArgs)
            ->setLinkRoutePlaceholders($placeholders);

    }

    protected function assertName(string $name, array $valid, array $invalid): string
    {
        return parent::assertName($name, self::ACCEPTED_TAGS, []);
    }

    public function getLinkRoutePlaceholders(): array
    {
        return $this->linkRoutePlaceholders;
    }

    public function setLinkRoutePlaceholders(array $linkRoutePlaceholders): self
    {
        $this->linkRoutePlaceholders = $linkRoutePlaceholders;
        return $this;
    }

    public function getDataLink(): ?AbstractRecordData
    {
        return $this->dataLink;
    }

    public function setDataLink(?AbstractRecordData $dataLink): self
    {
        $this->dataLink = $dataLink;
        return $this;
    }

    public function generateRouteArguments(): array
    {
        $args = $this->getRouteParams();
        $record = $this->dataLink?->getRecord();
        if (!empty($this->linkRoutePlaceholders)) {
            if ($record === null) {
                throw new \LogicException('Precisa informar o registro para substituição na URL.');
            }
            $accessor = BasePropertyColumn::getPropertyAccessor();
            foreach ($this->linkRoutePlaceholders as $param => $property) {
                $args[$param] = $accessor->getValue($record, $property);
            }
        }

        return $args;
    }

    protected function prepareRender(): void
    {
        parent::prepareRender();
        $generator = $this->getDataLink()->getUrlGenerator();
        if (!empty($generator)) {
            $this->attr['href'] = $generator->generate($this->getRoute(), $this->generateRouteArguments());
        }
    }

}
