<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Twig;

final class HtmlEscaper
{
    public const int CONTENT_FLAGS = ENT_NOQUOTES | ENT_SUBSTITUTE | ENT_HTML5;
    public const int ATTRIBUTE_FLAGS = ENT_COMPAT | ENT_SUBSTITUTE | ENT_DISALLOWED | ENT_HTML5;
    public const string UTF8 = 'UTF-8';

    private static ?self $singleton = null;

    public static function singleton(): self
    {
        if (self::$singleton === null) {
            self::$singleton = new self();
        }

        return self::$singleton;
    }

    public function safeAttribute(?string $content): string
    {
        return htmlentities($content ?? '', self::ATTRIBUTE_FLAGS, self::UTF8);
    }

    public function safeAttributeSet(array $attr): string
    {
        $html = '';
        foreach ($attr as $name => $value) {
            if ($value === null) {
                $html .= sprintf(' %s', self::safeAttribute($name));
            }
            elseif ($value === true || $value === false) {
                $html .= sprintf(' %s="%s"', self::safeAttribute($name), $value ? 'true' : 'false');
            }
            else {
                $html .= \sprintf(' %s="%s"', self::safeAttribute($name), self::safeAttribute($value));
            }
        }

        return $html;
    }

    public function encode(?string $content): string
    {
        return htmlentities($content ?? '', self::CONTENT_FLAGS, self::UTF8);
    }

    public function decode(?string $content): string
    {
        return html_entity_decode($content ?? '', self::CONTENT_FLAGS, self::UTF8);
    }

    public function unclosedTag(string $tag, array $attr): string
    {
        return \sprintf('<%s%s />', $tag, self::safeAttributeSet($attr));
    }

    public function openTag(string $tag, array $attr): string
    {
        return \sprintf('<%s%s>', $tag, self::safeAttributeSet($attr));
    }

    public function closeTag(string $tag): string
    {
        return \sprintf('</%s>', $tag);
    }

    public function tag(string $tag, array $attr, string $safeContent): string
    {
        return \sprintf('<%s%s>%s</%s>', $tag, self::safeAttributeSet($attr), $safeContent, $tag);
    }
}
