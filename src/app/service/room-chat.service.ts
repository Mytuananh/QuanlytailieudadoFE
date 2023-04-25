import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { RoomChat } from '../model/room/room-chat';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoomChatService {
  private url = environment.URL + '/rooms';
  constructor(private http: HttpClient, private jwtService: JwtService) { }

  public createRoomChat(roomChatForm: any): Observable<RoomChat> {
    return this.http.post(`${this.url}`, roomChatForm, this.jwtService.getHttpOptions());
  }
  public findByRoomChatId(roomChatId: any): Observable<RoomChat> {
    return this.http.get(`${this.url}/${roomChatId}`, this.jwtService.getHttpOptions());
  }
  public findAllByPresentUser(): Observable<any> {
    return this.http.get(`${this.url}/presentUser`, this.jwtService.getHttpOptions());
  }
}
