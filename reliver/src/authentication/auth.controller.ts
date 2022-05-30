import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

import { AuthService } from "src/authentication/auth.service";
// import { User } from "./interfaces/User.interface";
import { User } from "./models/User.entity";

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get()
	login(): string {
		return this.authService.getHello()
	}

	@Get("/facebook")
	@UseGuards(AuthGuard("facebook"))
	async facebookLogin(): Promise<any> {
		return HttpStatus.OK;
	}

	@Get("/facebook/redirect")
	@UseGuards(AuthGuard("facebook"))
	async facebookLoginRedirect(@Req() req: Request): Promise<any> {
		return {
			statusCode: HttpStatus.OK,
		};
	}

	@Get("/users")
	async getUsers(@Req() req: Request): Promise<any> {
		const data = await this.authService.findAll()

		return {
			users: data
		}
	}
}