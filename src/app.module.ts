import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config';
import { OrderModule } from './order/order.module';

@Module({
	imports: [
		//MongooseModule.forRoot(`mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`),
		MongooseModule.forRoot(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`),
		OrderModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
