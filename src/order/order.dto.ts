import { OrderStatusEnum } from './_enums/order-status.enum';
import { IRestaurantDto } from './dto/restaurant.dto';
import { IClientDto } from './dto/client.dto';
import { IDeliverDto } from './dto/deliver.dto';
import { IMenuDto } from './dto/menu.dto';
import { IArticleDto } from './dto/article.dto';

export interface IOrderDto {
	_id: string;
	restaurant: IRestaurantDto;
	client: IClientDto;
	deliver: IDeliverDto;
	status: OrderStatusEnum;
	articles: IArticleDto[];
	menus: IMenuDto[];
	location: {
		lat: number;
		lng: number;
		address: string;
	};
	clientComment: string;
	deliverComment: string;
	restaurantComment: string;
	restaurantPrice: number;
}

export interface ICreateOrderDto {
	_id: string;
	restaurant: IRestaurantDto;
	client: IClientDto;
	articles: IArticleDto[] | string[];
	menus: IMenuDto[] | string[];
	status: OrderStatusEnum;
	location: {
		lat: number;
		lng: number;
		address: string;
	};
	clientComment: string;
	deliverComment?: string;
	restaurantComment?: string;
	restaurantPrice: number;
	delivererFee: number;
	appFee: number;
}

export interface IUpdateOrderDto {
	_id: string;
	deliver?: IDeliverDto;
	status: OrderStatusEnum;
	deliverComment: string;
	restaurantComment: string;
}