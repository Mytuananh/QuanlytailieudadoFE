import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  files: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/files/all').subscribe((res: any) => {
      this.files = res;
      console.log(res);
      this.debug();

    });
  }

  navigateToFileInfo(file: any) {
    this.router.navigate(['/file', file.fileName]);
  }

  debug() {
    console.log(this.files);
  }

}
