import { Product } from '../models';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  prodId: any;
  productId: string;
  product: Product = new Product(null);

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('product_id');
     // console.log('this is this.productId ', this.productId);
    });
  }

  ngOnInit() {
    this.productService.getCake(this.productId);
    console.log('Init', this.productId);
    this.productService.getCake(this.productId).subscribe(res => {
      this.product = new Product(res['data']);
    });
  }

  onSubmit(): void {

    this.productService
      .updateCake(this.productId, this.product)
      .subscribe(result => {
        this.router.navigate(['/product-list']);
      });
    console.log('submitted');
  }

  onDelete(product: Product): void {
    this.productService.removeCake(this.productId).subscribe(result => {
     // console.log('this is the onDelete() route', this.router);
      this.router.navigate(['/product-list']);
    });
  }
}
