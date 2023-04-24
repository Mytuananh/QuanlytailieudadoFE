import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  username: String = '';

  constructor(private userService: UserService, private router: Router) {
    this.userService.getPresentUserInfo().subscribe((response: any) => {
      this.username = response.username;
    })
  }

  toMainMenu() {
    this.router.navigate(['/main-menu']);
  }
}
