import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article {
	@Prop({ required: true })
	name: string;

	@Prop()
	description: string;

	@Prop()
	articleImage: string;

	@Prop({ required: true })
	price: number;
}

export type ArticleDocument = Article & Document;

export const ArticleSchema = SchemaFactory.createForClass(Article);
