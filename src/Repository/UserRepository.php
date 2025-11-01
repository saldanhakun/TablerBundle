<?php

/*
 * This file is part of the Tabler bundle, created by Kevin Papst (www.kevinpapst.de)
 * and fully revamped and upgraded by Marcelo Saldanha (marcelosaldanha.com.br)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Saldanhakun\TablerBundle\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Saldanhakun\TablerBundle\Entity\User;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(\sprintf('Instances of "%s" are not supported.', $user::class));
        }

        $user->setPassword($newHashedPassword);
        $this->getEntityManager()->persist($user);
        $this->getEntityManager()->flush();
    }

    public function getUsersQueryBuilder(?bool $isVerified, ?User $current, ?array $roles): QueryBuilder
    {
        $qb = $this->createQueryBuilder('u')
            ->orderBy('u.displayName', 'asc');
        if ($isVerified !== null) {
            $qb->andWhere('u.isVerified = :verified')->setParameter('verified', $isVerified);
        }
        if ($current !== null) {
            $qb->andWhere('u.id = :userId')->setParameter('userId', $current->getId());
        }
        if (!empty($roles)) {
            $ors = [];
            foreach ($roles as $index => $role) {
                $ors[] = "(JSON_CONTAINS(u.roles, :role$index) = 1)";
            }
            $qb->andWhere('(' . implode(' OR ', $ors) . ')');
            foreach ($roles as $index => $role) {
                $qb->setParameter("role$index", $role);
            }
        }

        return $qb;
    }

    public function getSingleUserBuilder(User $record): QueryBuilder
    {
        return $this->getUsersQueryBuilder(null, $record, null);
    }
}
