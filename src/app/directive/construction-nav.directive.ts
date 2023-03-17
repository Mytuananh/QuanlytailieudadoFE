import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[navListActive]'
})
export class ConstructionNavDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const listItems = this.el.nativeElement.parentNode.children;
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove('active');
    }
    this.el.nativeElement.classList.add('active');
  }
}