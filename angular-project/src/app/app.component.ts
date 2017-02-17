import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<newheader></newheader>
  			<router-outlet></router-outlet>
  			<newfooter></newfooter>`,
})
export class AppComponent  { name = 'Angular'; }
