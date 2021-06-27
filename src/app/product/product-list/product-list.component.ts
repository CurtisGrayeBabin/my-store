import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  title: string = "Product List Page (main page)";

  // products for sale passed down from parent AppComponent
  @Input() productList: Product[];

  constructor() {
    this.productList = []; // avoiding errors with this initialization
   }

  ngOnInit(): void {


  }

}
