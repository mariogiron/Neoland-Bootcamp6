import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
  }

}