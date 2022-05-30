import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/User.entity';

@Injectable()
export class AuthService extends PassportStrategy(Strategy, "facebook")  {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,	
	) {
		super({
			clientID: "466995494586303",
			clientSecret: "98db49701eedfd1de86fbd29fbffde38",
			callbackURL: `http://localhost:5000/facebook/redirect`,
			scope: "email",
			profileFields: ['id', 'displayName', 'email', 'verified']
		})
	}

	async validate(access_token: string, refresh_token: string, profile: Profile, done: (err: any, user: any, info?: any) => void): Promise<any> {
		const { name, emails } = profile
		console.log(profile)
		const user = new User() 
			// email: emails[0].value,
			// username: emails[0].value,
			// first_name: name.givenName,
			// last_name: name.familyName,
		user.email = emails[0].value
		user.username = `https://graph.facebook.com/${profile.id}/picture?type=large`
		user.first_name = profile.displayName
		user.last_name = ''
		user.last_login = new Date()
		user.date_joined = new Date()

		await this.add(user)

		const payload = {
			user,
			access_token
		}

		done(null, payload)
	}

	findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	findOne(id: string): Promise<User> {
		return this.usersRepository.findOne(id);
	}

	async remove(id: string): Promise<void> {
		await this.usersRepository.delete(id);
	}
	
	async add(user: User): Promise<void> {
		const us = await this.usersRepository.save(user)
		console.log(us)
	}
}
