import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router, private jwtService: JwtService) { }


  login() {
    const form = {
      email: this.email,
      password: this.password,
    }
    this.userService.login(form).subscribe((response: any) => {
      sessionStorage.setItem('jwtToken', response.token)
      this.router.navigate(['/main-menu']);
    })
  }
}
