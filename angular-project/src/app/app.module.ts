import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NewHomePageComponent } from './newhomepage/newhomepage.component';
import { NewDetailPageComponent } from './newdetailpage/newdetailpage.component';
import { NewSupportPageComponent } from './newsupportpage/newsupportpage.component';
import { NewHeaderComponent } from './newheader/newheader.component';
import { NewSliderComponent } from './newslider/newslider.component';
import { NewCategoriesComponent } from './newcategories/newcategories.component';
import { NewProductsComponent } from './newproducts/newproducts.component';
import { NewDetailsComponent } from './newdetails/newdetails.component';
import { NewContactComponent } from './newcontactform/newcontactform.component';
import { NewFooterComponent } from './newfooter/newfooter.component';

import { DataService } from './shared/data-service';

@NgModule({
  imports:      [ 
  	BrowserModule,
    FormsModule,
  	RouterModule.forRoot([
  		{ path: 'home', component:NewHomePageComponent },
  		{ path: 'shoe/:id', component:NewDetailPageComponent },
  		{ path: 'support', component:NewSupportPageComponent },
  		{ path: '', redirectTo: 'home', pathMatch: 'full' },
  		{ path: '**', redirectTo: 'home', pathMatch: 'full'}
  	]) 
  ],
  declarations: [ AppComponent, NewHomePageComponent, NewDetailPageComponent, NewSupportPageComponent, NewHeaderComponent, NewSliderComponent, NewCategoriesComponent, NewProductsComponent, NewDetailsComponent, NewContactComponent, NewFooterComponent ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
