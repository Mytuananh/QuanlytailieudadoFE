import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';
import { ConstructionComponent } from '../pages/construction/construction.component';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  @Output() textChange = new EventEmitter<void>();
  @Input('type') type!: string;
  constructor(private el: ElementRef, private constructionComponent: ConstructionComponent) {}

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    this.constructionComponent.onTextChange(this.type);
    // Lấy innerText của li
    const liText = target.innerText.toUpperCase();
    // Tìm đến div có class "change" trong cùng một component
    const h3 = document.querySelector('h3.change-text');
    if (h3) {
      // Thay đổi innerText của div bằng innerText của li
      h3.innerHTML = 'DANH MỤC ' + liText;
    }
  }

}