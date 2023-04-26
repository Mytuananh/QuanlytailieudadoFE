import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class QuanlycongtrinhService {

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getData(type: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/type?type=${type}`, this.jwtService.getHttpOptions());
  }

  getListImage(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/images/${maCT}`, this.jwtService.getHttpOptions());
  }

  getListFile(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/list/files/${maCT}`, this.jwtService.getHttpOptions());
  }

  createCongTrinh(congTrinhDto: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/create-cong-trinh`, congTrinhDto, this.jwtService.getHttpOptionsFile());
  }

  updateCongTrinh(congTrinh: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/update-cong-trinh`, congTrinh, this.jwtService.getHttpOptions());
  }

  deleteCongTrinh(maCT: String) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/delete-cong-trinh`, maCT, this.jwtService.getHttpOptions());
  }

  uploadImage(uploadImageDTO: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/upload-image`, uploadImageDTO, this.jwtService.getHttpOptions())
  }

  uploadFile(uploadFileDTO: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/upload-file`, uploadFileDTO, this.jwtService.getHttpOptions())
  }

  deleteFile(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/delete-file`, body, this.jwtService.getHttpOptions())
  }

  getLichSuCongTrinh(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/lich-su/${maCT}`, this.jwtService.getHttpOptions())
  }

  getAllCongTrinhCount() {
    return this.http.get(`http://localhost:8080/api/cong-trinh/count`, this.jwtService.getHttpOptions())
  }

  getAllCongTrinh() {
    return this.http.get(`http://localhost:8080/api/cong-trinh/all`, this.jwtService.getHttpOptions())
  }

  updateThongTinCongTrinh(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/update/thong-tin`, body, this.jwtService.getHttpOptions())
  }

  getCTByMaCT(maCT: string) {
    return this.http.get(`http://localhost:8080/api/cong-trinh/maCT/${maCT}`, this.jwtService.getHttpOptions())
  }

  updateThongTinQuanLyCongTrinh(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/updateThongTinQuanLyCongTrinh`, body, this.jwtService.getHttpOptionsFile())

  }
}
