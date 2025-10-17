<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Router;

use Symfony\Component\HttpFoundation\RedirectResponse;
use function Symfony\Component\String\u;
use Symfony\Component\Uid\Ulid;

/***
 * @property-read string defaultRoute
 */
abstract class AbstractRouter
{
    private bool $absolute = false;

    public function __construct(private readonly AbstractAppRouteHelper $appRouteHelper)
    {
    }

    public function getAbsolute(): bool
    {
        return $this->absolute;
    }

    public function setAbsolute(bool $absolute): self
    {
        $this->absolute = $absolute;

        return $this;
    }

    public function getHelper(): AbstractAppRouteHelper
    {
        return $this->appRouteHelper;
    }

    abstract protected function getRoutePrefix(): string;

    protected function getUrl(string $subRoute, array $parameters = []): string
    {
        $route = trim(\sprintf('%s.%s', $this->getRoutePrefix(), $subRoute), '.');

        return $this->appRouteHelper->generateUrl($route, $parameters, $this->absolute);
    }

    protected function getObjectIdParam(): string
    {
        return 'id';
    }

    protected function getObjectId(object $object): string
    {
        $id = $object->getId();
        if ($id instanceof Ulid) {
            return $id->toBase32();
        } else {
            return $id;
        }
    }

    protected function resolveRoute(string $id): string
    {
        if ($id == 'default') {
            $const = \get_class($this) . '::' . strtoupper($id);
            if (\defined($const)) {
                return \constant($const);
            }
        }

        return $id;
    }

    public function __call(string $name, array $arguments)
    {
        // Retorna o nome da rota desejada (com/sem o 'get')
        if (str_starts_with($name, 'getRouteFor') || str_starts_with($name, 'routeFor')) {
            $id = str_replace('getRouteFor', 'routeFor', $name);
            $id = $this->resolveRoute(lcfirst(substr($id, \strlen('routeFor'))));

            return trim(\sprintf('%s.%s', $this->getRoutePrefix(), $id), '.');
        }
        // Retorna uma resposta válida para redirecionamento para a rota
        elseif (str_starts_with($name, 'redirectTo')) {
            $id = $this->resolveRoute(lcfirst(substr($name, \strlen('redirectTo'))));
            $url = $this->$id(...$arguments);

            return new RedirectResponse($url, 302);
        }
        // Converte automaticamente objetos em referências de identificação
        if (!empty($arguments) && \is_object($arguments[0])) {
            $arguments[0] = [
                $this->getObjectIdParam() => $this->getObjectId($arguments[0]),
            ];
        }

        return $this->getUrl(u($name)->snake(), $arguments);
    }

    public function __get(string $name)
    {
        if (str_ends_with($name, 'Route')) {
            $name = 'getRouteFor' . ucfirst(substr($name, 0, -5));

            return \call_user_func([$this, $name]);
        } else {
            throw new \Exception(\sprintf('Propriedade não existe: %s::%s', \get_class($this), $name));
        }
    }
}
