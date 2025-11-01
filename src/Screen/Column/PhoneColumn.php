<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Screen\Column;

use Saldanhakun\BrazilianValidators\Data\PhoneDTO;
use Symfony\Component\PropertyAccess\PropertyPathInterface;
use Twig\Environment;

class PhoneColumn extends PropertyColumn
{
    private ?string $chatStarter = null;

    public function __construct(PropertyPathInterface|string $property, private readonly Environment $twig)
    {
        parent::__construct($property);
    }

    public function getChatStarter(): ?string
    {
        return $this->chatStarter;
    }

    public function setChatStarter(?string $chatStarter): self
    {
        $this->chatStarter = $chatStarter;

        return $this;
    }

    protected function renderContentValue(mixed $value): string
    {
        $phone = new PhoneDTO(parent::renderContentValue($value));
        if ($phone->isLandline()) {
            $icon = 'fa fa-phone';
        } elseif ($phone->isMobile()) {
            $icon = 'fa fa-mobile';
        } elseif ($phone->isToll()) {
            $icon = 'fa fa-call-center';
        } elseif ($phone->isService()) {
            $icon = 'fa fa-phone-alt';
        } else {
            $icon = 'fa fa-phone';
        }

        if ($this->isLinkable()) {
            return parent::renderContentValue(\sprintf('<i class="%s"></i> %s', $icon, $value));
        } else {
            $template = $this->twig->load('@Tabler/includes/phone-column.html.twig');

            return $template->render([
                'phone_number' => $phone->normalize(),
                'digits_only' => $phone->getDigits(),
                'icon' => $icon,
                'allow_call' => !$phone->isService(),
                'allow_chat' => $phone->isMobile(),
                'chat_starter' => $this->getChatStarter(),
                'phone' => $phone,
            ]);
        }
    }
}
