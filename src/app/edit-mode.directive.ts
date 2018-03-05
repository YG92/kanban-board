import {
  Directive, ElementRef, EventEmitter, HostListener,
  Output, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appEditMode]'
})
export class EditModeDirective {

  constructor() {
  }

  @Output() appEditMode = new EventEmitter<boolean>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.appEditMode.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.appEditMode.emit(false);
  }
}
