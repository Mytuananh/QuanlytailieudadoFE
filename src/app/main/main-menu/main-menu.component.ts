import { Trang3DeleteService } from './../../service/js/trang3-delete.service';
import { Rightbartrang3Service } from './../../service/js/rightbartrang3.service';
import { QuanlycongtrinhService } from './../../service/quanlycongtrinh.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modaltrang3Service } from 'src/app/service/js/modaltrang3.service';

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

  @ViewChild('tabItems') tabItems!: ElementRef<HTMLDivElement>;
  @ViewChild('tabPanes') tabPanes!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    private quanlyCongTrinhService: QuanlycongtrinhService,
    private modaltrang3Service: Modaltrang3Service,
    private rightbartrang3Service: Rightbartrang3Service,
    private trang3DeleteService: Trang3DeleteService
  ) { }

  ngOnInit(): void {
    this.quanlyCongTrinhService.getAllCongTrinhCount().subscribe((response: any) => {
      this.countAll = response;
    })
    this.quanlyCongTrinhService.getData('CONG').subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
      this.congTrinhSelectedMessage = `Cống dưới đê (${this.countAll.congDuoiDe} công trình)`;
      this.trang3DeleteService.initTrang3Delete(this.listCTAll.map((ct: any) => ct.name));
    })
    this.quanlyCongTrinhService.getAllCongTrinh().subscribe((response: any) => {
      this.listCTLienQuan = response;
      this.listCTLienQuanSearch = this.listCTLienQuan;
    })
    mainMenu();
    this.modaltrang3Service.initModalTrang3();
    this.rightbartrang3Service.initRightBarTrang3();
  }

  navigateToQuanlycongtrinh() {
    this.router.navigate(['main-menu/quanlycongtrinh'])
  }

  changeCongTrinhType(type: string, message: string, count: number) {
    this.congTrinhSelectedMessage = `${message} (${count} công trình)`;

    this.quanlyCongTrinhService.getData(type).subscribe((response: any) => {
      this.listCTAll = response;
      this.listCT = this.listCTAll;
    })

    const tabs = document.querySelectorAll(".tab-item")
    const panes = document.querySelectorAll(".tab-panes")


    tabs.forEach((tab, index) => {
      if (tab.classList.contains(type)) {
        tab.classList.add("active")
      } else if (tab.classList.contains("active")) {
        tab.classList.remove("active")
      }
    });

    panes.forEach((pane, index) => {
      if (pane.classList.contains(type)) {
        pane.classList.add("active")
      } else if (pane.classList.contains("active")) {
        pane.classList.remove("active")
      }
    });

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
      type: (<HTMLSelectElement>document.querySelector("#project-code-1")).value,
      name: (<HTMLInputElement>document.querySelector("#project-name-1")).value.trim(),
      viTri: (<HTMLInputElement>document.querySelector("#project-location-name-1")).value.trim(),
      x: (<HTMLInputElement>document.querySelector("#project-location-x-1")).value.trim(),
      y: (<HTMLInputElement>document.querySelector("#project-location-y-1")).value.trim(),
      quyMo: (<HTMLInputElement>document.querySelector("#project-scale-1")).value.trim(),
      thietBi: (<HTMLInputElement>document.querySelector("#project-equipment-1")).value.trim(),
      congTrinhLienQuan: (document.querySelectorAll(".selectedCTLQ")), // TODO
      thongTinKhac: (<HTMLInputElement>document.querySelector("#other-info")).value.trim(),
      soThuTu: (<HTMLInputElement>document.querySelector("#project-code-num-1")).value.trim(),

      // Chưa lấy giá trị từ input file
    };
    console.log(body);

    const formData = new FormData();
    formData.set("viTri", body.viTri);
    formData.append("name", body.name);
    formData.append("type", body.type);
    formData.append("quyMo", body.quyMo);
    formData.append("thietBi", body.thietBi);
    // formData.append("congTrinhLienQuan", body.congTrinhLienQuan);
    formData.append("thongTinKhac", body.thongTinKhac);
    formData.append("soThuTu", body.soThuTu);

    if (body.congTrinhLienQuan) {
      body.congTrinhLienQuan.forEach((ctName) => {
        formData.append("congTrinhLienQuan", (ctName as HTMLOptionElement).value);
      })
    }

    if ((<HTMLSelectElement>document.querySelector("#infoTypeSelect")).value == "Link") {
      const link = (<HTMLInputElement>document.querySelector("#input-link")).value.trim();
      formData.append("link", link);
    } else {
      if (this.files && this.files.length > 0) {
        for (let i = 0; i < this.files.length; i++) {
          formData.append("files", this.files.item(i)!, this.files[i].name);
        }
      }
    }

    if (this.images) {
      for (let i = 0; i < this.images.length; i++) {
        formData.append("images", this.images[i], this.images[i].name);
      }
    }

    this.quanlyCongTrinhService.createCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }

  updateThongTinQuanLyCongTrinh() {
    const body = {
      maCT: (<HTMLSelectElement>document.querySelector("#project-name-did-1")).value,
      quanLyTaiSanType: (<HTMLSelectElement>document.querySelector("#project-type-1")).value,
      trangThaiCongTrinh: (<HTMLSelectElement>document.querySelector("#project-status-1")).value,
      viPhamLanChiem: (<HTMLInputElement>document.querySelector("#project-encroachment-violation-1")).value.trim(),
      lichSuCT: (<HTMLInputElement>document.querySelector("#project-history-1")).value.trim(),
    };
    console.log(body);

    const formData = new FormData();
    formData.append("maCT", body.maCT);
    formData.append("quanLyTaiSanType", body.quanLyTaiSanType);
    formData.append("trangThaiCongTrinh", body.trangThaiCongTrinh);
    formData.append("viPhamLanChiem", body.viPhamLanChiem);
    // formData.append("congTrinhLienQuan", body.congTrinhLienQuan);
    formData.append("lichSuCT", body.lichSuCT);
    this.quanlyCongTrinhService.updateThongTinQuanLyCongTrinh(formData).subscribe((response: any) => {
      console.log(response);
      location.reload();
    });
  }

  addFile() {
    var input = document.getElementById('input-file')! as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.files = input.files;
    }
  }

  iconDeleteCT(maCT: String) {
    this.deleteCT = maCT;
    document.getElementById("confirmModal")!.style.display = "none";
  }

  acceptDeleteCT() {
    this.quanlyCongTrinhService.deleteCongTrinh(this.deleteCT);
    document.getElementById("confirmModal")!.style.display = "none";
  }

  searchCongTrinhLienQuan() {
    if (this.searchCTLQ.length > 0) {
      this.listCTLienQuanSearch = this.listCTLienQuan.filter((ct: any) => ct.name.toLocaleLowerCase().includes(this.searchCTLQ.toLocaleLowerCase()));
      (document.getElementById(this.listCTLienQuanSearch[0].maCT)! as HTMLOptionElement).selected = true;

    } else {
      this.listCTLienQuanSearch = this.listCTLienQuan;
    }


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

  removeSelectedImage1() {    // TODO
    var select = document.getElementById('imageFiles-1')! as HTMLSelectElement;
    var selected = select.selectedIndex;
    if (selected >= 0) {
      this.images.splice(selected, 1);
    }
  }

  updateImageOptions1() {   // TODO
    var input = document.getElementById('imageInput-1')! as HTMLInputElement;

    if (input.files) {
      for (var i = 0; i < input.files.length; i++) {
        this.images.push(input.files[i])
      }
    }
  }

}


