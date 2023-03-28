import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { QuanlycongtrinhComponent } from './quanlycongtrinh/quanlycongtrinh.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainMenuComponent,
    QuanlycongtrinhComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ]
})
export class MainModule { }
