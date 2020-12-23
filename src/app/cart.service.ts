import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'
  }
)
export class CartService {
   
   items=[];

  constructor(
    private http:HttpClient
  ) { }
 
  addToCart(product) {//The addToCart() method appends a product to an array of items.
    this.items.push(product);
  }

  getItems() {//The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
    return this.items;
  }

  clearCart() {//returns an empty array of items, which empties the cart.
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}