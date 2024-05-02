import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BookManagementRoutingModule,
    StoreModule.forRoot<AppState>({book: BookReducer}),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument()
  ],
  exports: [
    BookManagementComponent
  ]
})
export class BookManagementModule { }
