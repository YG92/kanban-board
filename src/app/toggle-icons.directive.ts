import {
  Directive,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appToggleIcons]'
})
export class ToggleIconsDirective {

  constructor() {
  }

  @Output() appToggleIcons = new EventEmitter<boolean>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.appToggleIcons.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.appToggleIcons.emit(false);
  }
}
