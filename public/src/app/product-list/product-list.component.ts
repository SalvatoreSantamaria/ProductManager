import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  newProduct: any;
  products: {};
  editProduct: any;
  appTitle = 'Cake Product Management';
  data: {};
  title: string;
  desc: string;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductsFromService();
    this.newProduct = { title: '', url: '', price: 0 };
  }

  getProductsFromService() {
    const observable = this.productService.getCakes();
    observable.subscribe(data => {
      console.log('Got all data', data);
      this.products = data;
    });
  }

  deleteTask(id) {
    this.productService.removeCake(id).subscribe(result => {
      console.log('this is the deleteTask(id) route, id is', id);
      this.ngOnInit();
    });
  }

  updateProduct(product) {
    this.editProduct = {
      id: product._id,
      title: product.title,
      url: product.url,
    };
  }
}
