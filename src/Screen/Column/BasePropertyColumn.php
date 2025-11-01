<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Column;

use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessor;

abstract class BasePropertyColumn extends AbstractColumn
{
    protected static ?PropertyAccessor $accessor = null;

    public static function getPropertyAccessor(): PropertyAccessor
    {
        if (self::$accessor === null) {
            self::$accessor = PropertyAccess::createPropertyAccessor();
        }

        return self::$accessor;
    }

    public function getAccessor(): PropertyAccessor
    {
        return self::getPropertyAccessor();
    }

    abstract protected function isReadable(object|array $record, PropertyAccessor $accessor): bool;

    abstract protected function read(object|array $record, PropertyAccessor $accessor): mixed;

    protected function renderContent(object|array $record): string
    {
        $accessor = $this->getAccessor();
        $value = $this->read($record, $accessor);
        $render = $this->renderContentValue($value);

        return $this->wrapContent($render);
    }

    protected function wrapContent(string $content): string
    {
        return $content;
    }

    protected function isValueEmpty(mixed $value): bool
    {
        return empty($value);
    }

    protected function isEmpty(object|array|null $record): bool
    {
        $accessor = $this->getAccessor();
        if ($this->isReadable($record, $accessor)) {
            $value = $this->read($record, $accessor);

            return $this->isValueEmpty($value);
        }

        return empty($this->renderMissingValue());
    }
}
