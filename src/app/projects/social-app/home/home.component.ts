import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../interface/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productService.getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 }).subscribe((products: Products) => {
      console.log(products.items);
    })
  }
}
