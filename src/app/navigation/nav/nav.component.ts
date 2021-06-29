import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  productsString: string = "Product Catalog";
  cartString: string = "Shopping Cart";

  constructor() { }

  ngOnInit(): void {
  }

}
