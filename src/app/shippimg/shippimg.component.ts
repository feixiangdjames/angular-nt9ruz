import { Component, OnInit } from '@angular/core';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-shippimg',
  templateUrl: './shippimg.component.html',
  styleUrls: ['./shippimg.component.css']
})
export class ShippimgComponent implements OnInit {

    shippingCosts;//Define a shippingCosts property

  constructor(//inject the cart service in the ShippingComponent constructor
    private cartService:CartService
  ) { }

  ngOnInit() {//set the shippingcomsts property using the getShippingPrices method from the cartservice

    this.shippingCosts= this.cartService.getShippingPrices();

  }

}