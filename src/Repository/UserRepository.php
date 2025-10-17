<?php

/*
 * Este arquivo é parte da aplicação Sistema Tio Edy
 * Copyright 2025 Marcelo Saldanha - saldanha@uttara.com.br
 *
 * Software proprietário, distribuição e reuso estão proibidos.
 */

namespace KevinPapst\TablerBundle\Repository;

use KevinPapst\TablerBundle\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
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
            $qb->andWhere('('.implode(' OR ', $ors).')');
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
