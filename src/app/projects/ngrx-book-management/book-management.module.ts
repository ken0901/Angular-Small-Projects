import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';

@NgModule({
  declarations: [
    BookManagementComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BookManagementRoutingModule,
    StoreModule.forRoot({book: BookReducer})
  ],
  exports: [
    BookManagementComponent
  ]
})
export class BookManagementModule { }
