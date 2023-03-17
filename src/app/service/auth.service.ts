import { RegisterDTO } from './../model/register-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:8080/auth/authenticate', {email: email, password: password});
  }

  logout() {
    sessionStorage.removeItem('jwt');
  }

  register(registerDto: RegisterDTO) {
    return this.http.post('http://localhost:8080/auth/register', registerDto);
  }
}
