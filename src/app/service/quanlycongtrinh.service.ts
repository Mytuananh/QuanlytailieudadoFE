import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuanlycongtrinhService {

  constructor(private http: HttpClient) { }

  getData(type: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/type?type=${type}`);
  }

  getListImage(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/images/${maCT}`);
  }

  getListFile(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/files/${maCT}`);
  }

  createCongTrinh(congTrinhDto: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/create-cong-trinh`, congTrinhDto);
  }

  updateCongTrinh(congTrinh: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/update-cong-trinh`, congTrinh);
  }

  deleteCongTrinh(maCT: String) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/delete-cong-trinh`, maCT); 
  }

  uploadImage(uploadImageDTO: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/upload-image`, uploadImageDTO)
  }

  uploadFile(uploadFileDTO: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/upload-file`, uploadFileDTO)
  }

  deleteFile(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/delete-file`, body)
  }

  getLichSuCongTrinh(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/lich-su/${maCT}`)
  }

  getAllCongTrinhCount() {
    return this.http.get(`http://localhost:8080/api/cong-trinh/count`)
  }

  getAllCongTrinh() {
    return this.http.get(`http://localhost:8080/api/cong-trinh/all`)
  }

  updateThongTinCongTrinh(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/update/thong-tin`, body)
  }

  getCTByMaCT(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/maCT/${maCT}`)
  }
}
