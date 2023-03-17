import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  id: number = 0;
  code: string = '';
  tenCongTrinh: string = '';
  createdUser: string = '';
  name: string = '';
  address: string = '';
  ownUser: string = '';
  file: any;
  city: string = '';
  country: string = '';
  postCode: string = '';
  description: string = '';
  fileUrl: string | null | undefined;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('code', this.code);
    formData.append('tenCongTrinh', this.tenCongTrinh);
    formData.append('address', this.address);
    formData.append('ownUser', this.ownUser);
    formData.append('file', this.file, this.file.name);
    formData.append('city', this.city);
    formData.append('country', this.country);
    formData.append('postCode', this.postCode);
    formData.append('description', this.description);
    formData.append('createdUser', this.createdUser);

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
      })
    };

    this.http.post('http://localhost:8080/api/files/create', formData, httpOptions)
    .subscribe(response => console.log(response));
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.file = file;
    console.log('File imported');
  }

}
