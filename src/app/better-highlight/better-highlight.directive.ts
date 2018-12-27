import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highLightColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.defaultColor = 'yellow';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
  
  }

  @HostListener('mouseenter') mouseover(eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.highLightColor;
  } 

  @HostListener('mouseleave') mouseleave(eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = this.defaultColor;
  } 
}
