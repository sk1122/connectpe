import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique, Index } from 'typeorm';

@Entity()
// @Unique(["email", "username"])
@Index(["email", "username"], { "unique": true })
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	email: string
	
	@Column()
	username: string

	@Column({ "nullable": true })
	first_name: string;

	@Column({ "nullable": true })
	last_name: string;

	@Column({ "nullable": true })
	last_login: Date

	@CreateDateColumn()
	@Column()
	date_joined: Date

	@Column({ default: true })
	is_active: boolean;
}