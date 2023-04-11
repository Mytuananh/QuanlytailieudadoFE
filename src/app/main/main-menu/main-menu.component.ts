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
  listCT: any;
  listCTLienQuan: any;
  selectedForUpdateCT: any = {};
  selectedMaCT: any;


  search: string = '';
  congTrinhSelectedMessage: any;

  @ViewChild('tabItems') tabItems!: ElementRef<HTMLDivElement>;
  @ViewChild('tabPanes') tabPanes!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private quanlyCongTrinhService: QuanlycongtrinhService ) { }

  ngOnInit(): void {
    this.quanlyCongTrinhService.getAllCongTrinhCount().subscribe((response: any) => {
      this.countAll = response;
    })
    this.quanlyCongTrinhService.getData('CONG').subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
      this.congTrinhSelectedMessage = `Cống dưới đê ( ${this.countAll.congDuoiDe} công trình )`;
    })
    this.quanlyCongTrinhService.getAllCongTrinh().subscribe((response: any) => {
      this.listCTLienQuan = response;
    })
    mainMenu();
  }

  navigateToQuanlycongtrinh() {
    this.router.navigate(['main-menu/quanlycongtrinh'])
  }

  changeCongTrinhType(type: string, message: string, count: number) {
    this.congTrinhSelectedMessage = `${message} ( ${count} công trình )`;

    this.quanlyCongTrinhService.getData(type).subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
    })
  }

  searchCongTrinhName() {
    if (this.search.length > 0) {
      this.listCT = this.listCTAll.filter((ct: any) => ct.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
    } else {
      this.listCT = this.listCTAll;
    }
  }

  createCongTrinh() {
    const body = {
      name: (<HTMLInputElement>document.querySelector("#project-name")).value.trim(),
      viTri: (<HTMLInputElement>document.querySelector("#project-location-name")).value.trim(),
      x: (<HTMLInputElement>document.querySelector("#project-location-x")).value.trim(),
      y: (<HTMLInputElement>document.querySelector("#project-location-y")).value.trim(),
      type: (<HTMLSelectElement>document.querySelector("#project-code")).value,
      quyMo: (<HTMLInputElement>document.querySelector("#project-scale")).value.trim(),
      thietBi: (<HTMLInputElement>document.querySelector("#project-equipment")).value.trim(),
      congTrinhLienQuan: (<HTMLSelectElement>document.querySelector("#related-projects")).value, // Chưa lấy giá trị từ input
      thongTinKhac: (<HTMLInputElement>document.querySelector("#other-info")).value.trim(),
      soThuTu: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Số thứ tự']")).value.trim(),
      // Chưa lấy giá trị từ input file
    };
    console.log(body);

    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("viTri", body.viTri);
    formData.append("type", body.type);
    formData.append("quyMo", body.quyMo);
    formData.append("thietBi", body.thietBi);
    formData.append("congTrinhLienQuan", body.congTrinhLienQuan);
    formData.append("thongTinKhac", body.thongTinKhac);
    formData.append("soThuTu", body.soThuTu);
    const files = (<HTMLInputElement>document.querySelector("#file-upload")).files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i], files[i].name);
      }
    }

    this.quanlyCongTrinhService.createCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }

  onCTSelected(maCT: string) {
    this.selectedForUpdateCT = this.listCTLienQuan.find((ct: any) => ct.maCT == maCT);
    console.log(this.selectedForUpdateCT);
  }

  updateCongTrinh() {
    // console.log(this.selectedForUpdateCT);

    this.quanlyCongTrinhService.updateThongTinCongTrinh(this.selectedForUpdateCT).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }

  toCongTrinhInfo(maCT: string) {
    this.router.navigate([`main-menu/cong-trinh/${maCT}`])
  }
}
