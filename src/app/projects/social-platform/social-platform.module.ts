import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialPlatformRoutingModule } from './social-platform-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SocialPlatformComponent } from './social-platform.component';


@NgModule({
  declarations: [
    SocialPlatformComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialPlatformRoutingModule
  ],
  exports: [
    SocialPlatformComponent
  ]
})
export class SocialPlatformModule { }
