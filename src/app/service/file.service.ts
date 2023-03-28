import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  previewFile(fileName: string) {
    return this.http.get(`http://localhost:8080/api/files/preview/pdf${fileName}`)
  }
}
