import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../interface/types';
import { FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css'],
  standalone: true,
  imports: [DialogModule, CommonModule,FormsModule,RatingModule,ButtonModule,ReactiveFormsModule]
})
export class EditPopupComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();
  @Input() header!: string;

  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  specialCharacterValidator(): ValidatorFn {
    return (control) => {
      const hasSpecialCharacter = /[!@#$%^&*()_+-=\[\]{};':"\\|,.<>\/?]+/.test(
        control.value
      );

      return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
    }
  }

  productForm = this.formBuilder.group({
    name: ['',[Validators.required, this.specialCharacterValidator()]],
    image: [''],
    price: ['',[Validators.required]],
    rating: [0]
  });

  // name: this.product.name,
  // image: this.product.image,
  // price: this.product.price,
  // rating: this.product.rating
  ngOnChanges() {
    this.productForm.patchValue(this.product);
  }
  
  onConfirm() {
    const {name, image, price, rating } = this.productForm.value;
    this.confirm.emit({
      name: name || '',
      image: image || '',
      price: price || '',
      rating: rating || 0
    });
    //  name: this.productForm.value.name || '',
    // image: this.productForm.value.image || '',
    // price: this.productForm.value.price || '',
    // rating: this.productForm.value.rating || 0

    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
  }
}
