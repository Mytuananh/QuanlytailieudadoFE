import { ConstructionService } from './../../service/construction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {
  listConstruction: any;
  constructor(
    private constructionService: ConstructionService
  ) {}

  ngOnInit(): void {
    this.constructionService.getAllConstruction().subscribe((response: any) => {
        this.listConstruction = response.constr
    })
  }
}
