import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';
  constructor(private el: ElementRef) {}

  private element = <HTMLDivElement>this.el.nativeElement;

  ngOnInit() {
    // this.element.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || this.appHighlight || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.element.style.backgroundColor = color;
  }
}
