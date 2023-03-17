import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
}
