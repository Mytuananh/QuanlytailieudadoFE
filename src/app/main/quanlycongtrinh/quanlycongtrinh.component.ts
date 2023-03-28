import { FileService } from './../../service/file.service';
import { QuanlycongtrinhService } from './../../service/quanlycongtrinh.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-quanlycongtrinh',
  templateUrl: './quanlycongtrinh.component.html',
  styleUrls: ['./quanlycongtrinh.component.css']
})
export class QuanlycongtrinhComponent implements OnInit {
  listCTAll: any;
  listCT: any;
  congtrinh: any = null;
  listLichSuCT: any;
  modalLichSu: any;

  isEditing: boolean = false;
  isCreating: boolean = false;

  selectedFiles?: FileList;
  selectedImages?: FileList

  search: string = '';

  @ViewChild('tabItems') tabItems!: ElementRef<HTMLDivElement>;
  @ViewChild('tabPanes') tabPanes!: ElementRef<HTMLDivElement>;

  constructor(private quanlicongtrinhService: QuanlycongtrinhService, private router: Router, private fileService: FileService) { }

  ngOnInit(): void {

    // this.quanlicongtrinhService.getData('CONG').subscribe((response: any) => {
    //   console.log(response);
    //   this.listCTAll = response;
    //   this.listCT = this.listCTAll;
    //   this.changeCongTrinhTo(0);
    // })

  }

  changeCongTrinhTo(i: number) {
    this.congtrinh = this.listCT[i];
    console.log('congtrinh', this.congtrinh);
    this.quanlicongtrinhService.getListImage(this.congtrinh.maCT).subscribe((response: any) => {
      this.congtrinh.images = response;
    })

    this.quanlicongtrinhService.getListFile(this.congtrinh.maCT).subscribe((response: any) => {
      this.congtrinh.files = response;
      this.addScript();

    })

    this.quanlicongtrinhService.getLichSuCongTrinh(this.congtrinh.maCT).subscribe((response: any) => {
      this.listLichSuCT = response;
      this.modalLichSu = this.listLichSuCT[0];

    })
  }

  searchCongTrinhName() {
    if (this.search.length > 0) {
      this.listCT = this.listCT.filter((ct: any) => ct.name.includes(this.search));
    console.log(this.listCT);
    } else {
      this.listCT = this.listCTAll;
    }
  }

  previewFile() {
    const fileName = (<HTMLInputElement>document.querySelector("#file-hs-congtrinh")).value;
    window.open(`http://localhost:8080/api/files/preview/pdf/${fileName}`);
  }

  createCongTrinh() {
    const body = {
      name: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập tên công trình...']")).value.trim(),
      viTri: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập vị trí công trình...']")).value.trim(),
      type: (<HTMLSelectElement>document.querySelector("#createCT .form-select")).value,
      quyMo: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập quy mô công trình...']")).value.trim(),
      thietBi: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập thiết bị...']")).value.trim(),
      congTrinhLienQuan: null, // Chưa lấy giá trị từ input
      thongTinKhac: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập thông tin khác']")).value.trim(),
      soThuTu: (<HTMLInputElement>document.querySelector("#createCT input[placeholder='Nhập số thứ tự công trình...']")).value.trim(),
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
      location.reload();
    });
  }

  updateCongTrinh() {
    const body = {
      name: (<HTMLInputElement>document.querySelector("#editCT input[placeholder='Nhập tên công trình...']")).value.trim(),
      viTri: (<HTMLInputElement>document.querySelector("#editCT input[placeholder='Nhập vị trí công trình...']")).value.trim(),
      quyMo: (<HTMLInputElement>document.querySelector("#editCT input[placeholder='Nhập quy mô công trình...']")).value.trim(),
      thietBi: (<HTMLInputElement>document.querySelector("#editCT input[placeholder='Nhập thiết bị...']")).value.trim(),
      congTrinhLienQuan: null, // Chưa lấy giá trị từ input
      thongTinKhac: (<HTMLInputElement>document.querySelector("#editCT input[placeholder='Nhập thông tin khác']")).value.trim(),
      maCT: (<HTMLInputElement>document.querySelector("#editMaCT")).value.trim(),
      noiDungChinhSua: (<HTMLInputElement>document.querySelector("#noiDungChinhSua")).value.trim(),
      // Chưa lấy giá trị từ input file
    };
    console.log(body);

    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("viTri", body.viTri);
    formData.append("quyMo", body.quyMo);
    formData.append("thietBi", body.thietBi);
    formData.append("congTrinhLienQuan", "");
    formData.append("thongTinKhac", body.thongTinKhac);
    formData.append("maCT", body.maCT);

    this.quanlicongtrinhService.updateCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      this.congtrinh = response;
      location.reload();
    });
  }

  deleteCongTrinh() {
    this.quanlicongtrinhService.deleteCongTrinh(this.congtrinh.maCT).subscribe((response: any) => {
      console.log(response);
      this.congtrinh = response;
      location.reload();
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles?.length);
  }

  onImageSelected(event: any) {
    this.selectedImages = event.target.files;
    console.log(this.selectedImages?.length);

  }

  uploadImage() {
    const inputEl: HTMLInputElement = document.getElementById('upload-image-input') as HTMLInputElement;
    if (inputEl.files) {
        const image : any = inputEl.files.item(0);
        const formData = new FormData();
        formData.append('images', image);
        formData.append('maCT', this.congtrinh.maCT);
        this.quanlicongtrinhService.uploadImage(formData).subscribe((response: any) => {
          location.reload();
        });
    }
  }

  uploadFile() {
    const inputEl: HTMLInputElement = document.getElementById('upload-file-input') as HTMLInputElement;
    if (inputEl.files) {
        const file : any = inputEl.files.item(0);
        const formData = new FormData();
        formData.append('files', file);
        formData.append('maCT', this.congtrinh.maCT);
        this.quanlicongtrinhService.uploadFile(formData).subscribe((response: any) => {
          location.reload();
        });
    }
  }

  deleteFile() {
    const fileName = (<HTMLInputElement>document.querySelector("#file-hs-congtrinh")).value;
    const formData = new FormData();
    formData.append('maCT', this.congtrinh.maCT);
    formData.append('fileName', fileName);
    this.quanlicongtrinhService.deleteFile(formData).subscribe((response: any) => {
      location.reload();
    });
  }

  edit() {
    this.isEditing = !this.isEditing;
  }

  showLichSuModal(i: number) {
    this.modalLichSu = this.listLichSuCT[i];
    console.log('show lich su Modal');
    console.log(this.modalLichSu);
  }

  openSide(type: string) {
    const mySideQlct = document.getElementById("my-side-qlct");
    if (mySideQlct) mySideQlct.style.width = "30vh";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginLeft = "30vh";
    this.quanlicongtrinhService.getData(type).subscribe((response: any) => {
      console.log(response);
      this.listCTAll = response;
      this.listCT = this.listCTAll;
      this.changeCongTrinhTo(0);
    })
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
    if (e2) e2.style.marginRight = "30vh";
  }
    
  closeSide1() {
    const mySideQlct = document.getElementById("my-side-qlct-1");
    if (mySideQlct) mySideQlct.style.width = "0";
    const e2 = document.getElementById("main-my-side-qlct")
    if (e2) e2.style.marginRight = "0";
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

  addScript() {
    const tabs = this.tabItems.nativeElement.querySelectorAll('.tab-item');
    const panes = this.tabPanes.nativeElement.querySelectorAll('.tab-pane');

    tabs.forEach((tab, index) => {
      console.log(index);
      const pane = panes[index];

      tab.addEventListener('click', () => {
        const activeTab = this.tabItems.nativeElement.querySelector('.tab-item.active');
        const activePane = this.tabPanes.nativeElement.querySelector('.tab-pane.active');

        if(activeTab && activePane) {
          activeTab.classList.remove('active');
          activePane.classList.remove('active');
        }

        tab.classList.add('active');
        pane.classList.add('active');
      });
    });
  }
}
