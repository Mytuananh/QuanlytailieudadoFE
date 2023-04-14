import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../class/message';
import {Client, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client;
  private messagesSubject: Subject<Message> = new Subject<Message>();

  constructor() {
    let socket = new SockJS('/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/' + userId, (message) => {
        this.messagesSubject.next(JSON.parse(message.body));
      });
    });
  }

  private connect() {
    
  }

  public sendMessage(message: Message) {
    this.stompClient.send('/app/chat', {}, JSON.stringify(message));
  }

  public getMessages(): Observable<Message> {
    return this.messagesSubject.asObservable();
  }
}

