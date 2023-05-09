import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class HoSoCTService {

  constructor(private http: HttpClient, private jwtService: JwtService) { }


  getAllHoSoCongTrinhCount() {
    return this.http.get(`http://localhost:8080/api/ho-so-cong-trinh/count`, this.jwtService.getHttpOptions())
  }

  getData(type: string) {
    return this.http.get(`http://localhost:8080/api/ho-so-cong-trinh/type?type=${type}`, this.jwtService.getHttpOptions());
  }
}
