import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interface/types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [RatingModule,FormsModule]
})
export class ProductComponent implements OnInit{
  @Input() product!: Product;
  @Output() outputProduct: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {
    this.outputProduct.emit(this.product);
  }
}
