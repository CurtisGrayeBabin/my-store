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
  backLinkText: string = "Back to product list";
  product: Product = {id:0,name:'',price:0,url:'',description:''};

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    // get id from route user is on
    this.id = parseInt(this.route.snapshot.params['id']);

    // sort through stream of products to store the product this component is detailing
    this.productsService.getProducts().subscribe(res => {
      // locate the 1 product this detail component is about
      for(let i = 0; i<res.length; i++){
        if(res[i].id === this.id){
          this.product = res[i];
        }
      }
    });
  }


}
