<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Event;

use Saldanhakun\TablerBundle\Model\NotificationInterface;
use Saldanhakun\TablerBundle\Model\NotificationV2Interface;

interface NotificationEventInterface
{
    public function getTotal(): int;

    public function isVisible(): bool;

    public function isShowIfEmpty(): bool;

    public function getTitle(): ?string;

    public function getTitleEmpty(): ?string;

    public function getTitleHtml(): ?string;

    public function isWithArrow(): bool;

    public function getBadgeColor(): string;

    public function isShowBadgeTotal(): bool;

    public function getMaxDisplay(): int;

    /**
     * @return array<int,NotificationInterface | NotificationV2Interface>
     */
    public function getNotifications(?int $max = 10): array;
}
