import { Component, OnInit } from '@angular/core';
import { IShoes } from './shoes';
import { DataService } from '../shared/data-service';

@Component({
	selector: 'newproducts',
	templateUrl: './app/newproducts/newproducts.component.html'
})

export class NewProductsComponent implements OnInit {
	shoes:IShoes[];

	constructor(private DataService: DataService) {
	}

	ngOnInit() {
		this.shoes = this.DataService.getData();
	}
}