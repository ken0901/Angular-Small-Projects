import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingAppComponent } from './painting-app.component';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { PaintingAppRoutingModule } from './painting-app-routing.module';



@NgModule({
  declarations: [
    PaintingAppComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    HttpClientModule,
    PaintingAppRoutingModule
  ],
  exports: [
    PaintingAppComponent
  ]
})
export class PaintingAppModule { }
