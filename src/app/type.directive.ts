import { Directive, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appType]'
})
export class TypeDirective implements AfterViewInit{
 @Input() notifitype = 'red';
 @Input() comment = 'blue';
 @Input() price = 'green';
  constructor(private elmref: ElementRef) { }

  ngAfterViewInit() {
    this.elmref.nativeElement.style.color = this.notifitype;
    this.elmref.nativeElement.style.color = this.comment;
    this.elmref.nativeElement.style.color = this.price;
  }
}
