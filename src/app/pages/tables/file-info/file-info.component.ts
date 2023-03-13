import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit {
  fileId!: string;
  pdfData: any;
  pdfSource =  "assets/a.pdf";
  fileUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.fileId = params['id'];
    //   this.http.get(`http://localhost:8080/api/files/download/${this.fileId}`, {responseType: 'arraybuffer'}).subscribe(data => {
    //     this.pdfData = new Uint8Array(data);
    //   });
    // });
  }

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (event) => {
  //       this.fileUrl = event.target.result as string;
  //     };
  //   }
  // }
}