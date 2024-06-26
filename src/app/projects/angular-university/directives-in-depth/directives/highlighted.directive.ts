import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted: boolean = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("Directive created..");
   }

   @HostBinding('class.highlighted')
   get cssClasses() {
    return this.isHighlighted;
   }

   @HostBinding('attr.disabled')
   get disabled() {
    return "true";
   }

   @HostListener('mouseover', ['$event'])
   mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
   }

   @HostListener('mouseleave')
   mouseLeavee() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
   }

   toggle() {
    console.log("toggle");
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
   }
}
