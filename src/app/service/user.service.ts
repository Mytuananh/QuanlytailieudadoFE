import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: Number = 0;
  private chatId: Number[] = [];

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  setUserId(userId: Number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  getUserByNickname(user: any) {
    return this.http.post(`http://localhost:8080/api/users`, user, this.jwtService.getHttpOptions())
  }

  getPresentUserInfo() {
    console.log(`Bearer ${sessionStorage.getItem('jwtToken')}`);
    return this.http.get(`http://localhost:8080/api/users/present`, this.jwtService.getHttpOptions())
  }

  register(form: any) {
    return this.http.post(`http://localhost:8080/api/auth/register`, form)
  }

  login(form: any) {
    return this.http.post(`http://localhost:8080/api/auth/authenticate`, form)
  }

}
