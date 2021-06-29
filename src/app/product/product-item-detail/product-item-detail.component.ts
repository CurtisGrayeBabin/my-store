import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {

  id: number = 0;
  backLinkText: string = "Full catalog";
  // the exact product this component will detail
  product: Product = {id:0,name:'',price:0,url:'',description:''};

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.params['id']);
    
    this.productsService.getProductsStream().subscribe(res => {
      for(let i = 0; i<res.length; i++){
        if(res[i].id===this.id){
          this.product = res[i];
        }
      }
    });

  }

}