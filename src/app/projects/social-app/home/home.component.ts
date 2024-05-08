import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../interface/types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ProductComponent,CommonModule],
  standalone:true
})
export class HomeComponent  implements OnInit{


  products: Product[] = [];

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productService.getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 }).subscribe((products: Products) => {
      console.log(products.items);
      this.products = products.items;
    })
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }
}
