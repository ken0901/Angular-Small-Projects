import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingAppComponent } from './painting-app.component';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { PaintingAppRoutingModule } from './painting-app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PaintingAppComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    HttpClientModule,
    PaintingAppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    PaintingAppComponent
  ]
})
export class PaintingAppModule { }
