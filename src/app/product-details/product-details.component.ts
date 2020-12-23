import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {products} from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;//define the product property

  constructor(
    private route: ActivatedRoute
    //Inject the cart service by adding it to the constructor().
    ,private cartService: CartService
  ) {
   }

  ngOnInit() {

    const productIdFromroute=this.route.snapshot.paramMap.get('productId');
    
    this.product = products.find(product=>{
     
      return product.price === Number(productIdFromroute)
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart')
  }

}