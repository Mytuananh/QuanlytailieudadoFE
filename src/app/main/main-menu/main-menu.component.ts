import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  constructor(private router: Router) { }

  navigateToQuanlycongtrinh() {
    console.log('work');
    this.router.navigate(['main-menu/quanlycongtrinh'])
  }
}
