import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from "src/authentication/auth.controller";
import { AuthService } from "src/authentication/auth.service";
import { User } from "./authentication/models/User.entity";

@Module({
	imports: [
		TypeOrmModule.forRoot({
		  type: 'postgres',
		  host: 'localhost',
		  port: 5432,
		  username: 'sk1122',
		  password: 'satyam#789',
		  database: 'connectpe',
		  entities: [
			  User
		  ],
		  synchronize: true,
		  keepConnectionAlive: true,
		}),
		TypeOrmModule.forFeature([User])
	],	
	controllers: [
		AuthController
	],
	providers: [
		AuthService
	]
})
export class AppModule {}