import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** PdfViewer */
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './component/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { Man1Component } from './pages/man1/man1.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConstructionComponent } from './pages/construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    StartComponent,
    Man1Component,
    RegisterComponent,
    LoginComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    NgbModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
