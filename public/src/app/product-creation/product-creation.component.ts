import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css'],
})
export class ProductCreationComponent implements OnInit {
  newProduct: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.newProduct = { title: '', url: '', price: '' };
  }

  onSubmit() {
    const observable = this.productService.addCake(this.newProduct);
    observable.subscribe(data => {
      this.newProduct = { title: '', url: '', price: '' };
    });
  }
}
