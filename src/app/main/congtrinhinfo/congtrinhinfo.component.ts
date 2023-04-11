import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuanlycongtrinhService } from 'src/app/service/quanlycongtrinh.service';

declare var congtrinhinfo: any;


@Component({
  selector: 'app-congtrinhinfo',
  templateUrl: './congtrinhinfo.component.html',
  styleUrls: ['./congtrinhinfo.component.css']
})
export class CongtrinhinfoComponent implements OnInit {
  maCT: string | null | undefined;
  congTrinh: any;

  constructor(private route: ActivatedRoute, private router: Router, private quanlyCongTrinhService: QuanlycongtrinhService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.maCT = params.get('maCT');
    });
    if(this.maCT) {
      this.quanlyCongTrinhService.getCTByMaCT(this.maCT).subscribe((response: any) => {
        console.log(response);
        this.congTrinh = response;
      })
    }
    congtrinhinfo()
  }

  toMainMenu() {
    this.router.navigate([`main-menu`])
  }
}
