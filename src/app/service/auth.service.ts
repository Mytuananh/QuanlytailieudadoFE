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
    this.http.post('http://localhost:8080/auth/authenticate', {email: email, password: password}).subscribe((response: any) => {
      const jwtToken = response.token;
      const username = response.username;

      // Lưu JWT vào session storage
      sessionStorage.setItem('jwtToken', jwtToken);
      sessionStorage.setItem('username', username);

      this.router.navigateByUrl('/tables');
    });
  }

  logout() {
    sessionStorage.removeItem('jwt');
  }

  register(registerDto: RegisterDTO) {
    this.http.post('http://localhost:8080/auth/register', registerDto).subscribe((response: any) => {
      this.router.navigateByUrl('/login');
    });
  }
}
