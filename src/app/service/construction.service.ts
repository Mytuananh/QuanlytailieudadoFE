import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstructionDTO } from '../model/construction-dto';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
  private getAllUrl = 'http://localhost:8080/getAll';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  getAllConstruction() {
    return this.http.get('http://localhost:8080/api/construction/all');
  }

  getConstructionsByType(type: any) {
    return this.http.get(`http://localhost:8080/api/construction/type?type=${type}`);
  }

  updateConstruction(construction: ConstructionDTO) {
    return this.http.post(`http://localhost:8080/api/construction/update`, construction);
  }

  createConstruction(construction: any) {
    return this.http.post(`http://localhost:8080/api/construction/create`, construction);
  }
}
