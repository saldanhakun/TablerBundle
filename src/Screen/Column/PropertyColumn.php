<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Screen\Column;

use Symfony\Component\PropertyAccess\Exception\AccessException;
use Symfony\Component\PropertyAccess\Exception\InvalidTypeException;
use Symfony\Component\PropertyAccess\PropertyAccessor;
use Symfony\Component\PropertyAccess\PropertyPathInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class PropertyColumn extends BasePropertyColumn
{
    private PropertyPathInterface|string $property;
    private ?string $linkRoute = null;
    private array $linkRouteArgs = [];
    private array $linkRoutePlaceholders = ['id' => 'id'];

    public function __construct(PropertyPathInterface|string $property)
    {
        $this->property = $property;
        parent::__construct();
    }

    public function getProperty(): PropertyPathInterface|string
    {
        return $this->property;
    }

    public function setProperty(PropertyPathInterface|string $property): self
    {
        $this->property = $property;

        return $this;
    }

    protected function getPropertyPath(): string
    {
        if (\is_string($this->property)) {
            return $this->property;
        }

        return implode('.', $this->property->getElements());
    }

    protected function isReadable(object|array $record, PropertyAccessor $accessor): bool
    {
        return $accessor->isReadable($record, $this->property);
    }

    protected function read(object|array $record, PropertyAccessor $accessor): mixed
    {
        return $accessor->getValue($record, $this->property);
    }

    protected function renderMissingValue(): string
    {
        throw new AccessException("Impossível ler a propriedade '{$this->getPropertyPath()}'");
    }

    protected function renderCustomValue(mixed $value): string
    {
        throw new InvalidTypeException('scalar|Stringable', \is_array($value) ? 'Array' : \get_class($value), $this->getPropertyPath());
    }

    public function getLinkRoute(): ?string
    {
        return $this->linkRoute;
    }

    public function setLinkRoute(?string $linkRoute, array $args = []): self
    {
        $this->linkRoute = $linkRoute;
        $this->linkRouteArgs = $args;

        return $this;
    }

    public function getLinkRouteArgs(): array
    {
        return $this->linkRouteArgs;
    }

    public function setLinkRouteArgs(array $linkRouteArgs): self
    {
        $this->linkRouteArgs = $linkRouteArgs;

        return $this;
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

    public function generateRouteArguments(object|array|null $record): array
    {
        $args = $this->linkRouteArgs;
        if (!empty($this->linkRoutePlaceholders)) {
            if ($record === null) {
                throw new \LogicException('Precisa informar o registro para substituição na URL.');
            }
            $accessor = $this->getAccessor();
            foreach ($this->linkRoutePlaceholders as $param => $property) {
                $args[$param] = $accessor->getValue($record, $property);
            }
        }

        return $args;
    }

    public function generateUrl(object|array|null $record, UrlGeneratorInterface $urlGenerator): ?string
    {
        if (empty($this->linkRoute)) {
            return null;
        }
        $args = $this->generateRouteArguments($record);

        return $urlGenerator->generate($this->linkRoute, $args);
    }

    public function isLinkable(): bool
    {
        return !empty($this->linkRoute);
    }
}
