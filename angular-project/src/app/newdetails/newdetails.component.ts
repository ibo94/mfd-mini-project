import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IShoes } from '../newproducts/shoes';
import { DataService } from '../shared/data-service';

@Component({
	selector: 'newdetails',
	templateUrl: './app/newdetails/newdetails.component.html'
})

export class NewDetailsComponent { 
	shoeid: number;
	shoes: IShoes;

	constructor(private _route: ActivatedRoute, private _router: Router, private _DataService: DataService) {

	}

	ngOnInit() {
		this.shoeid = this._route.snapshot.params['id'];
		this.shoes = this._DataService.getDataById(this.shoeid);
	}
}