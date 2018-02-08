import {
  Directive, ElementRef, EventEmitter, HostListener, Output
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private elRef: ElementRef) {
  }

  @Output()
  public appClickOutside = new EventEmitter();

  @HostListener('document: click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.appClickOutside.emit(null);
    }
  }

}
