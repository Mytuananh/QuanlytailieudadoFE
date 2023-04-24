import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    constructor(private http: HttpClient) { }

    previewFile(fileName: string) {
        return this.http.get(`http://localhost:8080/api/files/preview/pdf${fileName}`)
    }

    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
            })
        };
    }
}
