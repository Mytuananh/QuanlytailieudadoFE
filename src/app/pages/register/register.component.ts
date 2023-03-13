import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/model/register-dto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerDto: RegisterDTO = {
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit', this.registerDto);
    this.authService.register(this.registerDto);
  }

}
