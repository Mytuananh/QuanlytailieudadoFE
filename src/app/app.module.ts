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
import { LoginComponent } from './auth/login/login.component';
import { ChatBoxComponent } from './component/chat-box/chat-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './component/chat/chat.component';
import { InjectableRxStompConfig, RxStompService, StompRService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { RegisterComponent } from './auth/register/register.component';

const stompConfig: InjectableRxStompConfig = {
  // Thay đổi địa chỉ WebSocket endpoint tùy thuộc vào backend của bạn
  brokerURL: 'ws://localhost:8080/ws',
  // Tên user đăng nhập vào hệ thống
  connectHeaders: {
    login: 'username',
    // Mật khẩu đăng nhập
    passcode: 'password',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MainComponent,
    LoginComponent,
    ChatBoxComponent,
    ChatComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MainModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [StompRService,
    {
      provide: InjectableRxStompConfig,
      useValue: stompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
