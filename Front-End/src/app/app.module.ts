import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { StoreComponent } from './store/store.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [

    AppComponent,
    StoreComponent
    
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    CommonModule,
    HttpClientModule

  ],
})
export class AppModule { }
