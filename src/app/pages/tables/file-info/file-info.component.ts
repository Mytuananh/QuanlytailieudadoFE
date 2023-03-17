import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInfoComponent implements OnInit {
  fileId!: string;
  fileUrl!: string;
  fileName!: string | null;
  prefix: string = 'http://localhost:8080/api/files/file/'
  constructor(private pdfService: NgxExtendedPdfViewerService, private route: ActivatedRoute) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fileName = params.get('fileName');
      console.log(this.fileName);

      this.fileUrl = this.prefix + this.fileName;
    });
  }

}
