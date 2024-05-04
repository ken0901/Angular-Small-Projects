import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialAppRoutingModule } from './social-app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SocialAppComponent } from './social-app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SocialAppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialAppRoutingModule
  ],
  exports: [
    SocialAppComponent,
  ]
})
export class SocialAppModule { }
