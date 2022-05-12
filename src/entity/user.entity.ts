import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Mug } from './mug.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    username: string;

    @Column({ name: 'discord_id', type: 'varchar', length: 300 })
    discordId: string;

    @Column({ type: 'varchar', length: 300 })
    discriminator: string;

    @Column({ nullable: true, type: 'varchar', length: 300 })
    avatar: string;

    @ManyToMany(() => Mug, (mug) => mug.favoritedBy)
    @JoinTable()
    favorites: Mug[]
}