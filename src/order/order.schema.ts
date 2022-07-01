import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { OrderStatusEnum } from './_enums/order-status.enum';
import { Article } from './schemas/article.schema';
import { Client } from './schemas/client.schema';
import mongoose from 'mongoose';
import { Menu } from './schemas/menu.schema';
import { Deliver } from './schemas/deliver.schema';
import { Restaurant } from './schemas/restaurant.schema';

@Schema({ timestamps: true })
export class Order {
	_id: MongooseSchema.Types.ObjectId;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
	restaurant: Restaurant;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
	client: Client;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Deliverer', nullable: true })
	deliver?: Deliver;

	@Prop({ type: String })
	status: OrderStatusEnum;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Article' })
	articles: Article[];

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
	menus: Menu[];

	@Prop({
		type: {
			lat: Number,
			lng: Number,
			address: String,
		},
		unique: true,
	})
	location: {
		lat: number;
		lng: number;
		address: string;
	};

	@Prop({ required: false })
	clientComment?: string;

	@Prop({ required: false })
	deliverComment?: string;

	@Prop({ required: false })
	restaurantComment?: string;

	@Prop()
	restaurantPrice: number;

	@Prop()
	delivererFee: number;

	@Prop()
	appFee: number;
}

export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);
