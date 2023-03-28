import { QuanlycongtrinhService } from './../../service/quanlycongtrinh.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private quanlicongtrinhService: QuanlycongtrinhService) { }

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

  create() {
    this.isCreating = !this.isCreating;
    if (this.isCreating == true) {
      this.congtrinh = {};
    } else {
      this.quanlicongtrinhService.createCongTrinh(this.congtrinh).subscribe((response: any) => {
        console.log(response);
        this.congtrinh = response;
      });
    }
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
