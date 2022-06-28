import { IArticleDto } from './article.dto';

export interface IMenuDto {
	name: string;
	menuImage: string;
	price: number;
	articles: IArticleDto[];
}
