import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';
import { Order } from './order.schema';
import { IOrderSearchDto } from './dto/order-search.dto';

@Controller('order')
export class OrderController {
	constructor(private _service: OrderService) {}

	@MessagePattern({ cmd: 'order/all' })
	async orders(search?: IOrderSearchDto): Promise<Order[]> {
		return this._service.findAll(search);
	}

	@MessagePattern({ cmd: 'order' })
	async order(id: string): Promise<Order> {
		return this._service.findOne(id);
	}

	@MessagePattern({ cmd: 'order/create' })
	async create(data) {
		return this._service.create(data);
	}

	@MessagePattern({ cmd: 'order/update' })
	async update(data) {
		return this._service.update(data);
	}
}
