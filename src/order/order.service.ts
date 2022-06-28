import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { IOrderSearchDto } from './dto/order-search.dto';

@Injectable()
export class OrderService {
	constructor(@InjectModel(Order.name) private _model: Model<OrderDocument>) {
	}

	async findAll(search?: IOrderSearchDto): Promise<Order[]> {
		return this._model.find({ search });
	}

	async findOne(_id: string): Promise<Order> {
		return this._model.findOne({ _id });
	}

	async create(input): Promise<Order> {
		const createdOrder = new this._model(input);
		return createdOrder.save();
	}
}
