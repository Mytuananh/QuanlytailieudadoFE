import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MainModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
