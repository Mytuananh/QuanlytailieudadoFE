import { HttpClient } from '@angular/common/http';
import { ConstructionService } from './../../service/construction.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConstructionDTO } from 'src/app/model/construction-dto';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {
  @ViewChild('saveConstructionButton') saveConstructionButton!: ElementRef;
  constructions: any;
  c: any;
  images: any;
  showInput3: boolean = false;
  index: number = 1;
  constructor(
    private constructionService: ConstructionService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initData('CONG');
  }

  getImageByConstructionId() {
    this.http.get(`http://localhost:8080/api/images/construction/${this.c.id}`).subscribe((res: any) => {
      this.images=res.map((i:any) => `http://localhost:8080/api/images/preview/${i}`);
      console.log(this.images);
    })
  }

  initData(type: any) {
    this.constructionService.getConstructionsByType(type).subscribe((response: any) => {
      console.log(response);
      this.constructions = response;
      this.c = response[0];
      this.getImageByConstructionId();
    });

    
  }

  onChangeConstruction(id: number) {
    console.log('onChangeConstruction: ', id);
    this.c = this.constructions[id];
    this.index = id + 1;
    this.getImageByConstructionId();
  } 

  onTextChange(type: any) {
    this.initData(type);
  }
  
  onSubmitConstruction() {
    if(this.c.id) {
      this.constructionService.updateConstruction(this.c)
    } else {
      console.log(this.c);
      const command = {
        name: this.c.name,
        code: this.c.code,
        location: this.c.location,
        type: this.c.type,
        address: this.c.address,
        area: this.c.area
      }
      this.http.post(`http://localhost:8080/api/construction/create`, command).subscribe((response: any) => {
        this.c = response;
        location.reload();
      })
    }
  }

  onFileSelected(event: any) {
    console.log('onFileSelected');
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);

    this.http.post(`http://localhost:8080/api/images/upload/construction/${this.c.id}`, formData).subscribe(
      (response: any) => {
        // Thêm file mới vào danh sách images
        console.log('response:', response);
        this.images.push(response);
        console.log(this.images);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  uploadImage(dataUri: string) {
    const body = { data: dataUri };

    this.http.post('http://localhost:8080/api/images/upload', body).subscribe((response: any) => {
      this.images.push(response.url);
    });
  }

  resetConstruction() {
    console.log('reset');
    this.c = {
      name: '',
      code: '',
      location: '',
      type: this.c.type,
      address: '',
      area: '',
    }

    this.images = [];
    this.saveConstructionButton.nativeElement.innerHTML = 'Lưu Công Trình';
  }

  createConstruction() {
    this.constructionService.createConstruction(this.c).subscribe((response: any) => {
      this.c = response;
      this.getImageByConstructionId();
    })
  }


}
