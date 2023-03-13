import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInfoComponent {
  fileId!: string;
  pdfData: any;
  pdfSource =  "assets/a.pdf";
  fileUrl!: string;
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
    }
  }
}
