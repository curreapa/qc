import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mutedInVisible]' 
})
export class MutedDirective implements AfterViewInit {

  constructor(private element:ElementRef) { 
    
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement
    const parentElement = element.parentElement
    this.setMinWidthHeight(parentElement)
  }
  setMinWidthHeight(el:any) { // prevent issue being visible all together
    const style = window.getComputedStyle(el);
    const [width, height] = [parseInt(style.width), parseInt(style.height)];
    !width && (el.style.minWidth = '40px');
    !height && (el.style.minHeight = '40px');
  }
}
