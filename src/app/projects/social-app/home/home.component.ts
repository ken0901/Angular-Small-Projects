import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../interface/types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ProductComponent,CommonModule,PaginatorModule],
  standalone:true
})
export class HomeComponent  implements OnInit{


  products: Product[] = [];
  totalRecords: number = 0;
  rows: number = 5;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.fetchProducts(0, this.rows);
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }

  fetchProducts(page: number, perPage: number) {
    this.productService.getProducts('http://localhost:3000/clothes', { page, perPage}).subscribe((products: Products) => {
      this.products = products.items;
      this.totalRecords = products.total;
    })
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }
}
