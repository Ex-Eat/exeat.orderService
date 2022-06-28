import { ILocationDto } from './deliver.dto';

export interface IRestaurantDto {
	_id: string;
	globalUserId: number;
	name: string;
	description: string;
	keywords: string[];
	professionalMail: string;
	phoneNumber: string;
	termsOfUse: boolean;
	location: ILocationDto;
	patronageCode: string;
	notification: boolean;
	restaurantImage: string;
}
