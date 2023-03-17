import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    email = '';
    password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSubmit() {
    console.log('login', this.email, this.password);
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      const jwtToken = response.token;
      const username = response.username;

      // Lưu JWT vào session storage
      sessionStorage.setItem('jwtToken', jwtToken);
      sessionStorage.setItem('username', username);

      this.router.navigateByUrl('/menu');
    });;
  }

}
