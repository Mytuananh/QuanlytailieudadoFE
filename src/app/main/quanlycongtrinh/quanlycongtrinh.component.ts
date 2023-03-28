import { QuanlycongtrinhService } from './../../service/quanlycongtrinh.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quanlycongtrinh',
  templateUrl: './quanlycongtrinh.component.html',
  styleUrls: ['./quanlycongtrinh.component.css']
})
export class QuanlycongtrinhComponent implements OnInit {
  listCT: any;
  congtrinh: any;

  isEditing: boolean = false;
  isCreating: boolean = false;

  constructor(private quanlicongtrinhService: QuanlycongtrinhService, private router: Router) { }

  ngOnInit(): void {
    this.quanlicongtrinhService.initData().subscribe((response: any) => {
      console.log(response);
      this.listCT = response;
      this.changeCongTrinhTo(0);
    })
  }

  changeCongTrinhTo(i: number) {
    this.congtrinh = this.listCT[i];
    this.quanlicongtrinhService.getListImage(this.congtrinh.maCT).subscribe((response: any) => {
      this.congtrinh.images = response;
    })

    this.quanlicongtrinhService.getListFile(this.congtrinh.maCT).subscribe((response: any) => {
      this.congtrinh.files = response;
    })
  }

  createCongTrinh() {
    const body = {
      name: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập tên công trình...']")).value.trim(),
      viTri: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập vị trí công trình...']")).value.trim(),
      type: (<HTMLSelectElement>document.querySelector(".form-select")).value,
      quyMo: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập quy mô công trình...']")).value.trim(),
      thietBi: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập thiết bị...']")).value.trim(),
      congTrinhLienQuan: null, // Chưa lấy giá trị từ input
      thongTinKhac: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập thông tin khác']")).value.trim(),
      soThuTu: (<HTMLInputElement>document.querySelector("input[placeholder='Nhập số thứ tự công trình...']")).value.trim(),
      // Chưa lấy giá trị từ input file
    };
    console.log(body);

    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("viTri", body.viTri);
    formData.append("type", body.type);
    formData.append("quyMo", body.quyMo);
    formData.append("thietBi", body.thietBi);
    formData.append("congTrinhLienQuan", "");
    formData.append("thongTinKhac", body.thongTinKhac);
    formData.append("soThuTu", body.soThuTu);

    this.quanlicongtrinhService.createCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      this.congtrinh = response;
      // location.reload();
    });
  }

  edit() {
    this.isEditing = !this.isEditing;
  }

  deleteCT() {}

  openSide() {
    const mySideQlct = document.getElementById("my-side-qlct");
    if (mySideQlct) mySideQlct.style.width = "30vh";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginLeft = "30vh";

  }
    
  closeSide() {
    const mySideQlct = document.getElementById("my-side-qlct");
    if (mySideQlct) mySideQlct.style.width = "0";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginLeft = "0";
  }
    
  openSide1() {
    const mySideQlct = document.getElementById("my-side-qlct-1");
    if (mySideQlct) mySideQlct.style.width = "30vh";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginLeft = "30vh";
  }
    
  closeSide1() {
    const mySideQlct = document.getElementById("my-side-qlct-1");
    if (mySideQlct) mySideQlct.style.width = "0";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginLeft = "30vh";
  }

  activateTab(index: number) {
    const tabs = document.querySelectorAll(".tab-item");
    const panes = document.querySelectorAll(".tab-pane");
    
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.add("active");
        panes[tabIndex].classList.add("active");
      } else {
        tab.classList.remove("active");
        panes[tabIndex].classList.remove("active");
      }
    });
  }
}
