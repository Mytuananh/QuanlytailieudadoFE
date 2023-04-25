import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url = environment.URL + '/notifications';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.sessionStorage.getItem('token')
    })
  };
  constructor(private http: HttpClient, private jwtService: JwtService) { }

  public findAllByUser(): Observable<any> {
    return this.http.get(this.url, this.jwtService.getHttpOptions());
  }
  public deleteNotification(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.jwtService.getHttpOptions());
  }
}
