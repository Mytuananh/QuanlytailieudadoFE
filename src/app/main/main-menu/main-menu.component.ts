import { QuanlycongtrinhService } from './../../service/quanlycongtrinh.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var mainMenu: any;

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  countAll: any;
  listCTAll: any;
  listCTSearch: any;
  congTrinhSelectedCount: any;

  constructor(private router: Router, private quanlyCongTrinhService: QuanlycongtrinhService ) { }

  ngOnInit(): void {
    this.quanlyCongTrinhService.getAllCongTrinhCount().subscribe((response: any) => {
      this.countAll = response;
    })
    this.quanlyCongTrinhService.getData('CONG').subscribe((response: any) => {
      this.listCTAll = response;
      this.listCTSearch = this.listCTAll;
    this.congTrinhSelectedCount = `Cống dưới đê ( ${this.countAll.congDuoiDe} )`;

    })
    mainMenu();
  }

  navigateToQuanlycongtrinh() {
    console.log('work');
    this.router.navigate(['main-menu/quanlycongtrinh'])
  }

  changeCongTrinhType(type: string, message: string, count: number) {
    this.congTrinhSelectedCount = `${message} ( ${count} )`;

    this.quanlyCongTrinhService.getData(type).subscribe((response: any) => {
      this.listCTAll = response;
      this.listCTSearch = this.listCTAll;
    })
  }
}
