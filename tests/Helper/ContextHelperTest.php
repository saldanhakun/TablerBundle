<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Tests\Helper;

use PHPUnit\Framework\TestCase;
use Saldanhakun\TablerBundle\Helper\ContextHelper;

/**
 * @covers \Saldanhakun\TablerBundle\Helper\ContextHelper
 */
class ContextHelperTest extends TestCase
{
    public function testOptions(): void
    {
        $input = [
            'foo' => 'bar',
            'security_cover_url' => 'https://placehold.co/1000',
        ];

        $context = new ContextHelper($input);

        $this->assertFalse($context->hasOption('test'));
        $this->assertNull($context->getOption('test'));

        $this->assertTrue($context->hasOption('foo'));
        $this->assertEquals('bar', $context->getOption('foo'));
        $this->assertEquals($input, $context->getOptions());

        $context->setOption('test', 'bla');
        $this->assertTrue($context->hasOption('test'));
        $this->assertEquals('bla', $context->getOption('test'));

        $this->assertEquals('https://placehold.co/1000', $context->getSecurityCoverUrl());
        $this->assertEquals('https://placehold.co/1000', $context->getOption('security_cover_url'));
        $context->setSecurityCoverUrl('https://placehold.co/1234');
        $this->assertEquals('https://placehold.co/1234', $context->getSecurityCoverUrl());
    }
}
