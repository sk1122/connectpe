import { NestFactory } from '@nestjs/core';
import { AppModule } from './index.module';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: 'http://localhost:3000'
	})
	await app.listen(5000);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
bootstrap();
