import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../component/book/book.component';
import { FormsModule } from '@angular/forms';
import { BookManagementSystemComponent } from '../book-management-system.component';



@NgModule({
  declarations: [
    BookManagementSystemComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BookManagementSystemComponent
  ]
})
export class BookManagementSystemModule { }
