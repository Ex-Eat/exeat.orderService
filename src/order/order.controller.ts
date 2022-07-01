import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';
import { Order } from './order.schema';
import { IOrderSearchDto } from './dto/order-search.dto';
import {ICreateOrderDto} from "./order.dto";

@Controller('order')
export class OrderController {
	constructor(private _service: OrderService) {}

	@MessagePattern({ cmd: 'order/all' })
	async orders(search?: IOrderSearchDto): Promise<Order[]> {
		return this._service.findAll(search);
	}

	@MessagePattern({ cmd: 'order/one' })
	async order(id: string): Promise<Order> {
		return this._service.findOne(id);
	}

	@MessagePattern({ cmd: 'order/create' })
	async create(data: { cart: ICreateOrderDto, client: unknown }) {
		return await this._service.create(data.cart, data.client);
	}

	@MessagePattern({ cmd: 'order/update' })
	async update(data) {
		return this._service.update(data);
	}
}
