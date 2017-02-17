import { Injectable } from '@angular/core';
import { SHOEDATA } from './data';
import { IShoes } from '../newproducts/shoes';

@Injectable()
export class DataService {
	getData(): IShoes[] {
		return SHOEDATA;
	}

	getDataById(shoesid: number) {
		return SHOEDATA.find(r => r.id == shoesid)
	}
}