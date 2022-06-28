import { Article } from '../article/article.schema';
import { Menu } from '../menu/menu.dto';
import { ILocationDto } from '../dto/deliver.dto';

export interface Restaurant {
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
	notifiction: boolean;
	restaurantImage: string;
	menus: Menu[];
	articles: Article[];
}
