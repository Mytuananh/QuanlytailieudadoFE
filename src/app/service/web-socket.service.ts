import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../class/message';
import {Client, CompatClient, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: CompatClient;
  private messagesSubject: Subject<Message> = new Subject<Message>();
  private userId: string = uuid.v4();

  constructor() {
    let socket = new SockJS('/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/' + this.userId, (message) => {
        this.messagesSubject.next(JSON.parse(message.body));
      });
    });
  }

  public sendMessage(message: Message) {
    this.stompClient.send('/app/chat', {}, JSON.stringify(message));
  }

  public getMessages(): Observable<Message> {
    return this.messagesSubject.asObservable();
  }
}

