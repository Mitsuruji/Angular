import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirListHover]'
})
export class DirListHoverDirective {
  @HostBinding('style.backgroundColor') bgColor = 'bisque';
  @HostBinding('style.color') cl = 'blue';

  constructor() { }
  
  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
    this.cl = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
    this.cl = 'black';
  }
}
