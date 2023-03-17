import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/model/register-dto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  fullname: string = '';
  email: string = '';
  password: string = '';
  re_password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    const registerDto: RegisterDTO = {
      username: this.fullname,
      email: this.email,
      password: this.password,
    }
    console.log('submit', registerDto);
    this.authService.register(registerDto).subscribe((response: any) => {
      this.router.navigateByUrl('/login');
    });;
  }
}
