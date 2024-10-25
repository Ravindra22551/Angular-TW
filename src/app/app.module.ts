import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelloComponent } from './hello/hello.component';
import{HttpClientModule}from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,

    PagenotfoundComponent,
     HelloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
