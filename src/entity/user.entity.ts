import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

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
}