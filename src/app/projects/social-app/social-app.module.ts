import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialAppRoutingModule } from './social-app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SocialAppComponent } from './social-app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    SocialAppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialAppRoutingModule,
    HttpClientModule
  ],
  exports: [
    SocialAppComponent,
  ]
})
export class SocialAppModule { }
