import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Order {

	_id: MongooseSchema.Types.ObjectId;

	restaurant: Restaurant,
	client: Client,
	deliver: Deliver,
	status: Enum["à définir"],

	@Prop()
	createdAt: Date,

	products: [Article, Menu, ...],

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

	@Prop()
	clientComment: string;

	@Prop()
	deliverComment: string;

	@Prop()
	restaurantComment: string;
}

export type OrderDocument = Order & Document;

export const OrderSchema = SchemaFactory.createForClass(Order);
