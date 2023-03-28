import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuanlycongtrinhService {

  constructor(private http: HttpClient) { }

  initData() {
    return this.http.get('http://localhost:8080/api/cong-trinh/type?type=CONG');
  }

  getListImage(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/images/${maCT}`);
  }

  getListFile(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/files/${maCT}`);
  }

  createCongTrinh(congTrinhDto: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/create-cong-tring`, congTrinhDto);
  }
}
