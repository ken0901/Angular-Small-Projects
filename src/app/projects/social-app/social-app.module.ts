import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialAppRoutingModule } from './social-app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SocialAppComponent } from './social-app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SocialAppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialAppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    provideAnimations()
  ],
  exports: [
    SocialAppComponent,
  ]
})
export class SocialAppModule { }
