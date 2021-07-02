import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  nameLabel: string = "Full name";
  addressLabel: string = "Address";
  creditCardNumberLabel: string = "Credit card number";

  nameDefault: string = "(minimum 3 characters)";
  addressDefault: string = "(minimum 6 characters)";
  creditCardNumberDefault: string = "(16-digit number)";

  message: string = "We will never share your information with anyone else.";

  fullName: string = '';
  address : string = '';
  cc: string = '';

  constructor(private orderService: OrderService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  confirmation(): void {
    this.orderService.setOrderInfo(this.fullName,this.address,this.cartService.getTotal());
    this.cartService.clearCart();
    this.router.navigateByUrl(`/cart/confirmation`);
  }

}
