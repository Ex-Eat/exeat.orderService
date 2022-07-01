import { ILocationDto } from './deliver.dto';

export interface IClientDto {
	_id: string;
	globalUserId: number;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	termsOfUse: boolean;
	locations: ILocationDto;
	patronageCode: string;
	notification: boolean;
}
