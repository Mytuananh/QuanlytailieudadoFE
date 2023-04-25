import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { RoomChat } from '../model/room/room-chat';
import { Message } from '@stomp/stompjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url = environment.URL + '/messages';
  constructor(private http: HttpClient, private jwtService: JwtService) { }

  public findAllByRoomChat(roomChat: RoomChat): Observable<any> {
    return this.http.put(`${this.url}/room-chat`, roomChat, this.jwtService.getHttpOptions());
  }
  public save(messageForm: any) {
    return this.http.post(this.url, messageForm);
  }
  public read(message: Message, roomChat: RoomChat) {
    return this.http.put(`${this.url}/read/${roomChat.id}`, message, this.jwtService.getHttpOptions());
  }
}
