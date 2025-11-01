<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Model;

interface UserDetailsInterface
{
    /**
     * @return MenuItemInterface[]
     */
    public function getLinks(): array;

    public function getUser(): ?UserInterface;

    public function isShowLogoutLink(): bool;
}
