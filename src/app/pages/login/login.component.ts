import { Component, OnInit, OnDestroy } from '@angular/core';
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
    private authService: AuthService
  ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSubmit() {
    console.log('login', this.email, this.password);
    this.authService.login(this.email, this.password);
  }

}
