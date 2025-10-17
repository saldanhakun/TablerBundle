<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Router;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use function Symfony\Component\String\u;

/***
 *
 * @property-read string startRoute
 *
 * @method UiRouter ui()
 * @method SecurityRouter security()
 * @method MediaRouter media()
 *
 * ---NEW_PHPDOC---
 */
abstract class AbstractAppRouteHelper
{
    // Dashboard principal da aplicação
    public const string START = 'homepage';

    // Rotas das telas de demonstração do Tabler
    public const string DEMO = 'demo';
    // Rotas para configuração da interface da aplicação
    public const string UI = 'ui';

    // Rotas do circuito de segurança
    public const string SECURITY = 'security';
    public const string MEDIA = 'media';

    // Cadastros de Módulos da aplicação

    //---NEW_CONST---


    /** @var AbstractRouter[] */
    private array $routers;

    public function __construct(private readonly UrlGeneratorInterface $urlGenerator)
    {
        $this->routers = [
            self::UI => new UiRouter($this),
            self::SECURITY => new SecurityRouter($this),
            self::MEDIA => new MediaRouter($this),

            //---NEW_ELEMENT---
        ];
    }

    public function generateUrl(string $route, array $parameters = [], bool $absolute = false): string
    {
        return $this->urlGenerator->generate($route, $parameters, $absolute ? UrlGeneratorInterface::ABSOLUTE_URL : UrlGeneratorInterface::ABSOLUTE_PATH);
    }

    public function start(): string
    {
        return $this->generateUrl(self::START);
    }

    public function demo(?string $page = null): string
    {
        return $this->generateUrl($this->getRouteForDemo($page));
    }

    public function getRouteForDemo(?string $page = null): string
    {
        if (empty($page)) {
            return self::DEMO;
        } else {
            return self::DEMO . '.' . $page;
        }
    }

    public function getSubRoute(string $module, ?string $route = null): string
    {
        if (!\array_key_exists($module, $this->routers)) {
            throw new \LogicException("Módulo não conhecido: $module");
        }
        if (empty($route)) {
            $const = \get_class($this->routers[$module]) . '::DEFAULT';
            if (!\defined($const)) {
                throw new \InvalidArgumentException("Não existe uma rota padrão para $module. Especifique um destino.");
            }
            $getter = 'getRouteFor' . ucfirst(u(\constant($const))->camel());
        } else {
            $getter = 'getRouteFor' . ucfirst(u($route)->camel());
        }

        return $this->routers[$module]->$getter();
    }

    public function getSubUrl(string $module, ?string $route = null, array $parameters = [], bool $absolute = false): string
    {
        $subRoute = $this->getSubRoute($module, $route);

        return $this->generateUrl($subRoute, $parameters, $absolute);
    }

    protected function getModules(): array
    {
        $const = static::class . '::MODULES';
        if (defined($const)) {
            return constant($const);
        }
        return [];
    }

    public function __call(string $name, array $arguments)
    {
        if (str_starts_with($name, 'getRouteFor')) {
            $id = u(substr($name, \strlen('getRouteFor')))->snake()->toString();
            $const = __CLASS__ . '::' . strtoupper($id);
            // Prioriza submódulos, referenciando a rota default, caso exista
            if (\array_key_exists($id, $this->routers)) {
                $const = \get_class($this->routers[$id]) . '::DEFAULT';
                if (\defined($const)) {
                    return \constant($const);
                }
            }
            // Lida com rotas definidas diretamente nesta classe (ex: start)
            if (\defined($const)) {
                return \constant($const);
            }
            throw new \LogicException("Rota inexistente: $name ($id, $const)");
        }
        if (str_starts_with($name, 'routeFor')) {
            $id = 'getR' . substr($name, 1);

            return $this->$id();
        }
        $id = u($name)->snake()->toString();
        if (\array_key_exists($id, $this->routers)) {
            return $this->routers[$id];
        }
        throw new \Exception("Método não implementado: AppRouteHelper::$name");
    }

    public function __get(string $name)
    {
        $module = null;
        if (str_ends_with($name, 'Module')) {
            $module = lcfirst(substr($name, 0, -6));
            if (array_key_exists($module, $this->getModules())) {
                return $this->generateUrl($module);
            }
            else {
                throw new \Exception(\sprintf('Módulo não existe: %s', $module));
            }
        }
        elseif (str_ends_with($name, 'ModuleRoute')) {
            $module = lcfirst(substr($name, 0, -11));
            if (array_key_exists($module, $this->getModules())) {
                return $module;
            }
            else {
                throw new \Exception(\sprintf('Módulo não existe: %s', $module));
            }
        }
        elseif ($name === 'startRoute') {
            return self::START;
        }
        else {
            throw new \Exception(\sprintf('Propriedade não existe: %s::%s', \get_class($this), $name));
        }
    }
}
