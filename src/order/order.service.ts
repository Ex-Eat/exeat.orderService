import {Injectable} from '@nestjs/common';
import {InjectModel, Prop} from '@nestjs/mongoose';
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
		return this._model.find({
			_id: search?._id || null,
			client: search?.client || null,
			restaurant: search?.restaurant || null,
			deliver: search?.deliver || null,
			status: search?.status || null,
		});
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

	async create(input: ICreateOrderDto, client): Promise<Order> {
		const newOrder: ICreateOrderDto = {
			...input,
			menus: input.menus.map(m => m._id) || [null],
			articles: input.articles.map(a => a._id) || [null],
			status: OrderStatusEnum.CREATED,
			delivererFee: input.restaurantPrice / 10,
			appFee: input.restaurantPrice / 10,
			client: client._id,
			deliverComment: '',
			restaurantComment: ''
		}
		const createdOrder: OrderDocument = new this._model(newOrder);
		return createdOrder.save();
	}

	async update(input: IUpdateOrderDto): Promise<Order> {
		return this._model.findByIdAndUpdate(input._id, input);
	}
}
