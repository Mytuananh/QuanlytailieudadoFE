import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  previewFile(fileName: string) {
    return this.http.get(`http://localhost:8080/api/files/preview/pdf${fileName}`, this.jwtService.getHttpOptions())
  }
}
