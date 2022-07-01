import { OrderStatusEnum } from '../_enums/order-status.enum';

export interface IOrderSearchDto {
	_id?: string;
	restaurant?: string;
	client?: string;
	deliver?: string;
	status?: OrderStatusEnum;
}
