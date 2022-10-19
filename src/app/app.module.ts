import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButton, MatButtonModule } from "@angular/material/button";

const MaterialModule = [
  MatButtonModule
];
const MaterialComponents = [
  MatButton
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MaterialModule
  ],
  exports: [MatButton],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
