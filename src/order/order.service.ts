import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
	constructor(@InjectModel(Order.name) private _model: Model<OrderDocument>) {}

	async findAll(): Promise<Order[]> {
		return this._model.find();
	}

	async findOne(_id: string): Promise<Order> {
		return this._model.findOne({ _id });
	}
}
