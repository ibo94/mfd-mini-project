import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class NewContact {
	contactname: string;
	contactemail: string;
	newstype: string;
}

@Component({
	selector: 'newcontactform',
	templateUrl: './app/newcontactform/newcontactform.component.html'
})

export class NewContactComponent implements OnInit {
	model:NewContact =  new NewContact();
	contacttypes: Array<string>;
	hasBeenSubmitted: boolean; 

	ngOnInit() {
		this.contacttypes = ['Baking', 'Dinners', 'Starters'];
		this.hasBeenSubmitted = false;
	}

	register(form: NgForm, event: Event) {
		event.preventDefault();
		this.hasBeenSubmitted = true;
		console.log(form.value.xyz);
	}
}