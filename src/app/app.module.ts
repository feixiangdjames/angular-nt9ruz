import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { NgModel } from '@angular/forms';

// Angular HttpClient is a built-in way to fetch data from external APIs and provide them your application as a  stream

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippimgComponent } from './shippimg/shippimg.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,//To register Angular's HttpClient providers globally, add HttpClientModule to the AppModule @NgModule() imports array.
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path:'products/:productId',component:ProductDetailsComponent} //add a route for prodcut details with a path of products/:productiD and  ProductDetailComponent for the componet
      ,{path:'shipping',component:ShippimgComponent}
      ,{path:'cart',component:CartComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShippimgComponent,
    CartComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/