import { HoSoCTService } from './../../service/ho-so-ct.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modaltrang3Service } from 'src/app/service/js/modaltrang3.service';
import { Rightbartrang3Service } from 'src/app/service/js/rightbartrang3.service';
import { Trang3DeleteService } from 'src/app/service/js/trang3-delete.service';
import { Trang3bdeleteService } from 'src/app/service/js/trang3bdelete.service';
import { Trang3btabService } from 'src/app/service/js/trang3btab.service';
import { Trang3btabmodService } from 'src/app/service/js/trang3btabmod.service';
import { QuanlycongtrinhService } from 'src/app/service/quanlycongtrinh.service';

declare var mainMenu: any;

@Component({
  selector: 'app-ho-so-cong-trinh',
  templateUrl: './ho-so-cong-trinh.component.html',
  styleUrls: ['./ho-so-cong-trinh.component.css']
})
export class HoSoCongTrinhComponent implements OnInit {

  countAll: any;
  listCTAll: any;
  listCT: any;
  listCTLienQuan: any;
  listCTLienQuanSearch: any;
  selectedForUpdateCT: any = {};
  selectedMaCT: any;

  images: File[] = [];
  files?: FileList;
  ortherInfomation: String = '';

  search: string = '';
  searchCTLQ: string = '';
  congTrinhSelectedMessage: any;

  deleteCT: any;

  constructor(
    private router: Router,
    private quanlyCongTrinhService: QuanlycongtrinhService,
    private modaltrang3Service: Modaltrang3Service,
    private rightbartrang3Service: Rightbartrang3Service,
    private trang3bdeleteService: Trang3bdeleteService,
    private hoSoCTService: HoSoCTService,
    private trang3bTabMod: Trang3btabmodService,
    private trang3bTab: Trang3btabService,
  ) { }

  ngOnInit(): void {
    this.hoSoCTService.getAllHoSoCongTrinhCount().subscribe((response: any) => {
      this.countAll = response;
    })
    this.hoSoCTService.getData('CONG').subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
      this.congTrinhSelectedMessage = `Cống dưới đê (${this.countAll.congDuoiDe} công trình)`;
      this.trang3bdeleteService.init();
    })
    this.quanlyCongTrinhService.getAllCongTrinh().subscribe((response: any) => {
      this.listCTLienQuan = response;
      this.listCTLienQuanSearch = this.listCTLienQuan;
    })
    mainMenu();
    this.modaltrang3Service.initModalTrang3();
    this.rightbartrang3Service.initRightBarTrang3();
    this.trang3bTab.init();
    this.trang3bTabMod.initTrang3btabmod();
  }
}
