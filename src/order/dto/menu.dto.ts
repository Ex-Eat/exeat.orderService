import { IArticleDto } from './article.dto';

export interface IMenuDto {
	_id: string;
	name: string;
	menuImage: string;
	price: number;
	articles: IArticleDto[];
}
