import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartPayload } from '../../models/CartPayload';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Map<string, CartPayload> = new Map();
  total: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = 0;
    for(let key of this.cart.keys()){
      const payload = this.cart.get(key)!;
      this.total += (payload.price * payload.quantity);
    }
  }

}
