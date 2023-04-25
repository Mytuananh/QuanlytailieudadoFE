import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJs from 'sockjs-client';
import { environment } from 'src/environments/environment';
import { Message } from '../model/message/message';
import { MessageService } from './message.service';
import { NotificationService } from './notification.service';
import { RoomChat } from '../model/room/room-chat';
import { JwtService } from './jwt.service';
import { CompatClient } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = environment.URL;
  private stompClient?: CompatClient;
  private stompClients?: CompatClient;
  private messages: Message[] = [];
  private notifications: Notification[] = [];
  private username = window.sessionStorage.getItem("username");
  constructor(private messageService: MessageService, private notificationService: NotificationService, private jwtService: JwtService) {
  }
  public connect(roomChat: RoomChat): void {
    this.messageService.findAllByRoomChat(roomChat).subscribe((messages) => {
      this.messages = messages;
      for (let i = 0; i < this.messages.length; i++) {
        // @ts-ignore
        if (this.messages[i].status == false && this.messages[i].user.username != this.username) {
          this.messageService.read(messages[i], roomChat).subscribe();
        }
      }
      const ws = new SockJs(`${this.url}/ws`);
      this.stompClient = Stomp.Stomp.over(ws);
      this.stompClient.connect({}, () => {
        // @ts-ignore
        this.stompClient.subscribe('/topic/messages/' + roomChat.id, (message) => {
          const message1 = JSON.parse(message.body);
          this.messages.push(message1);
        });
      });
    });
  }
  public getMessages(): any {
    return this.messages;
  }
  public disconnect(): void {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }
  public saveMessageUsingWebSocket(roomChat: RoomChat, messageForm: any): void {
    this.stompClient!.send('/app/messages/' + roomChat.id, this.jwtService.getHttpOptions(), JSON.stringify(messageForm));
  }
  public connectNotification(): void {
    // if (this.username != null) {
    //   this.notificationService.findAllByUser().subscribe((notifications) => {
    //     this.notifications = notifications;
    //     const ws = new SockJs(`${this.url}/ws`);
    //     this.stompClients = Stomp.Stomp.over(ws);
    //     this.stompClients!.connect({}, () => {
    //       // @ts-ignore
    //       this.stompClients.subscribe('/topic/notifications/' + this.username, (notification) => {
    //         const notification1 = JSON.parse(notification.body);
    //         this.notifications.push(notification1);
    //       });
    //     });
    //   });
    // }
  }
  public saveNotificationUsingWebSocket(notificationForm: any): void {
    this.stompClients!.send('/app/notifications/' + notificationForm.user.username, this.jwtService.getHttpOptions(), JSON.stringify(notificationForm));
  }
  public disconnectNotification(): void {
    if (this.stompClients != null) {
      this.stompClients.disconnect();
    }
  }
  public getNotications(): Notification[] {
    return this.notifications;
  }
}
