import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // populate products array with Observable stream service
    this.productsService.getProductsStream().subscribe(res => {
      this.products = res;
    });


  }

}