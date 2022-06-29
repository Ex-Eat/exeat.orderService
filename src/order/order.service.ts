import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Order, OrderDocument} from './order.schema';
import {IOrderSearchDto} from './dto/order-search.dto';
import {ICreateOrderDto, IUpdateOrderDto} from "./order.dto";
import {OrderStatusEnum} from "./_enums/order-status.enum";

@Injectable()
export class OrderService {
	constructor(@InjectModel(Order.name) private _model: Model<OrderDocument>) {
	}

	async findAll(search?: IOrderSearchDto): Promise<Order[]> {
		return this._model.find({ search });
	}

	async findOne(_id: string): Promise<Order> {
		return this._model.findOne({ _id })
			.populate('restaurant')
			.populate('deliverer')
			.populate('articles')
			.populate({
				path: 'menus',
				populate: {
					path: 'articles',
					model: 'Article'
				}
			});
	}

	async create(input: ICreateOrderDto): Promise<Order> {
		const createdOrder: OrderDocument = new this._model(input);
		createdOrder.status = OrderStatusEnum.CREATED;
		return createdOrder.save();
	}

	async update(input: IUpdateOrderDto): Promise<Order> {
		return this._model.findByIdAndUpdate(input._id, input);
	}
}
