<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class HumanizerExtension extends AbstractExtension
{
    public const string ELLIPSIS = '…';

    public function getFilters(): array
    {
        return [
            new TwigFilter('wordcount', [$this, 'getWordCount']),
            new TwigFilter('readingtime', [$this, 'getReadingTime']),
            new TwigFilter('shortentext', [$this, 'getShortenText']),
            new TwigFilter('obfuscateemail', [$this, 'getObfuscatedEmail']),
            new TwigFilter('relativetime', [$this, 'getRelativeTime'], ['is_safe' => ['html']]),
            new TwigFilter('relativetime_plain', [$this, 'getRelativeTimePlain']),
            new TwigFilter('seconds_in_time', [$this, 'getSecondsInTime']),
            new TwigFilter('ellipsis', [$this, 'getEllipsis'], ['is_safe' => ['html']]),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('whatsapp_number', [$this, 'whatsappNumber'], ['raw' => true]),
            new TwigFunction('whatsapp_chat', [$this, 'whatsappChat'], ['raw' => true]),
        ];
    }

    /**
     * A quantidade de palavras em um texto qualquer
     * @param $value
     * @return string
     */
    public function getWordCount($value): string
    {
        return str_word_count($value);
    }

    /**
     * Uma estimativa em minutos do tempo de leitura para uma certa quantidade de palavras
     * @param int|string $wordCount
     * @param int $speed Velocidade estimada de leitura (palavras por minuto)
     * @return string
     */
    public function getReadingTime($wordCount, $speed = 300): string
    {
        if (!is_numeric($wordCount)) {
            $wordCount = str_word_count(\strval($wordCount));
        }

        return ceil($wordCount / $speed);
    }

    public function getShortenText($text, int $chars, int $right = 3): string
    {
        return self::shortenText($text, $chars, $right);
    }

    public function getObfuscatedEmail($email): string
    {
        return self::obfuscateEmail($email);
    }

    public function getRelativeTime($value): string
    {
        return self::relativeTime($value, true);
    }

    public function getRelativeTimePlain($value): string
    {
        return self::relativeTime($value, false);
    }

    protected function normalizeClasses($value): array
    {
        if (\is_array($value)) {
            return $value;
        } elseif (\is_string($value)) {
            return explode(' ', $value);
        } else {
            return [];
        }
    }

    public function getSecondsInTime($value): string
    {
        return self::secondsInTime($value);
    }

    public function getEllipsis($value, $window = 8): string
    {
        return self::ellipsis($value, $window);
    }

    /**
     * Reduz um texto qualquer a tantos caracteres, divididos entre alguns do início e outros do final, com ellipisis.
     * @param string $text
     * @param int $chars
     * @param int $right
     * @return string
     */
    public static function shortenText(string $text, int $chars, int $right = 3): string
    {
        if (\strlen($text) > $chars) {
            $right = min($right, $chars);
            if ($right === $chars) {
                // pega apenas do final
                $text = self::ELLIPSIS . substr($text, -1 * $right, $right);
            } elseif ($right === 0) {
                // pega apenas do início
                $text = substr($text, 0, $chars) . self::ELLIPSIS;
            } else {
                // Pega das duas pontas
                $text = substr($text, 0, $chars - $right)
                    . self::ELLIPSIS
                    . substr($text, -1 * $right, $right);
            }
        }

        return $text;
    }

    /**
     * Versão obfuscada do e-mail (ex: s******a@n******s.com.br)
     * @param string $email
     * @return string
     */
    public static function obfuscateEmail(string $email): string
    {
        $parts = explode('@', $email);
        foreach ($parts as $p => $v) {
            $subparts = explode('.', $v);
            foreach ($subparts as $i => $s) {
                if (\strlen($s) > 3) {
                    $subparts[$i] = substr($s, 0, 1) . str_repeat('*', \strlen($s) - 2) . substr($s, \strlen($s) - 1, 1);
                } elseif ($p == 0) {
                    // ofusca o username, mesmo se for curtinho
                    $subparts[$i] = str_repeat('*', \strlen($s));
                }
            }
            $parts[$p] = implode('.', $subparts);
        }

        return implode('@', $parts);
    }

    /**
     * O número do celular formatado para Whatsapp, se viável.
     * @param string $phone
     * @return string
     */
    public static function whatsappNumber(string $phone): string
    {
        $tel = preg_replace('/[^0-9]/', '', $phone);
        if (\strlen($tel) == 11 && $tel[2] == '9') {
            $tel = "+55$tel";
        }
        if (substr($tel, 0, 1) !== '+') {
            $tel = "+$tel";
        }

        return $tel;
    }

    /**
     * A url para iniciar uma conversa pelo Whatsapp, com o número
     * @param string $phone
     * @param ?string $initialText
     * @return string
     */
    public static function whatsappChat(string $phone, ?string $initialText = null): string
    {
        $text = $initialText ? \sprintf('&text=%s', urlencode($initialText)) : '';

        return \sprintf('https://api.whatsapp.com/send?p=%s%s', self::whatsappNumber($phone), $text);
    }

    /**
     * Retorna uma representação humana relativa para a data informada.
     * Ex: "um minuto atrás", "em 2 semanas", "ano passado"
     * @param int $ts
     * @return string
     */
    public static function relativeTimestamp(int $ts): string
    {
        $week = explode(',', 'domingo,segunda-feira,terça-feira,quarta-feira,quinta-feira,sexta-feira,sábado');
        $month = explode(',', 'janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro');

        $diff = time() - $ts;
        if ($diff == 0) {
            return 'agora';
        } elseif ($diff > 0) {
            $day_diff = floor($diff / 86400);
            if ($day_diff == 0) {
                if ($diff < 60) {
                    return 'agora mesmo';
                }
                if ($diff < 120) {
                    return '1 minuto atrás';
                }
                if ($diff < 3600) {
                    return floor($diff / 60) . ' minutos atrás';
                }
                if ($diff < 7200) {
                    return '1 hora atrás';
                }
                if ($diff < 86400) {
                    return floor($diff / 3600) . ' horas atrás';
                }
            }
            if ($day_diff == 1) {
                return 'ontem';
            }
            if ($day_diff < 7) {
                return $day_diff . ' dias atrás';
            }
            if ($day_diff < 31) {
                return ceil($day_diff / 7) . ' semanas atrás';
            }
            if ($day_diff < 60) {
                return 'mês passado';
            }

            return \sprintf('%s/%s', $month[(int) date('m', $ts) - 1], date('Y', $ts));
        } else {
            $diff = abs($diff);
            $day_diff = floor($diff / 86400);
            if ($day_diff == 0) {
                if ($diff < 120) {
                    return 'em breve';
                }
                if ($diff < 3600) {
                    return 'em ' . floor($diff / 60) . ' minutos';
                }
                if ($diff < 7200) {
                    return 'em uma hora';
                }
                if ($diff < 86400) {
                    return 'em ' . floor($diff / 3600) . ' horas';
                }
            }
            if ($day_diff == 1) {
                return 'amanhã';
            }
            if ($day_diff < 4) {
                return $week[date('w', $ts)];
            }
            if ($day_diff < 7 + (7 - date('w'))) {
                return 'semana que vem';
            }
            if (ceil($day_diff / 7) < 4) {
                return 'em ' . ceil($day_diff / 7) . ' semanas';
            }
            if (\intval(date('n', $ts)) == (\intval(date('n')) + 1)) {
                return 'mês que vem';
            }

            return \sprintf('em %s/%s', $month[(int) date('m', $ts) - 1], date('Y', $ts));
        }
    }

    /**
     * Retorna uma representação temporal relativa para a data informada.
     * @param \DateTimeInterface|int|string $time
     * @param bool $html Se apenas o texto ou um span com a data completa no atributo title
     * @return string
     */
    public static function relativeTime($time, bool $html = true): string
    {
        if ($time instanceof \DateTimeInterface) {
            $time = $time->getTimestamp();
        } elseif (\is_string($time)) {
            $time = strtotime($time);
        }

        $relative = self::relativeTimestamp($time);
        if ($html) {
            $relative = \sprintf('<span title="%s">%s</span>', date('d/m/Y H:i:s', $time), $relative);
        }

        return $relative;
    }

    public static function secondsInTime($time): string
    {
        if ($time === null || $time === '') {
            return '';
        }
        $time = \floatval($time);
        if ($time < 5) {
            return number_format($time, 1, ',') . ' s';
        }
        if ($time < 70) {
            return \sprintf('%d s', $time);
        }
        if ($time < 3700) {
            return \sprintf('%d min %02d s', $time / 60, $time % 60);
        }
        if ($time < 90000) {
            return \sprintf('%d h %02d min %02d s', $time / 3600, ($time % 3600) / 60, ($time % 3600) % 60);
        } else {
            return \sprintf('%d dia %02d h %02d min', $time / 86400, ($time % 86400) / 3600, (($time % 86400) % 3600) / 60);
        }
    }

    public static function ellipsis($value, $window = 8): string
    {
        if (empty($value) || \strlen($value) < 20) {
            return $value;
        }

        return \sprintf('<span title="%s">%s...%s</span>', $value, substr($value, 0, 8), substr($value, -8));
    }
}
