import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {

  private highlight: boolean = false;
  private initColor: string;

  @Input() colour: string = '';
  @Input() highlightElms?: "type" | "title" | "hashtags" | "author";
  @HostBinding('style.backgroundColor') get textColour() {
    return this.highlight ? this.colour : 'transparent';
  }
  constructor(private element: ElementRef) {
    this.initColor = this.element.nativeElement.style.color;
  }

  // hover over type or tags
  @HostListener("mouseover") onMouseOver() {
    if (this.highlightElms === "type" || this.highlightElms === "author") {
      this.element.nativeElement.style.border = "4px solid white";
    }

    if (this.highlightElms === "hashtags" || this.highlightElms === "author") {
      this.element.nativeElement.style.color = 'blue';
    }
  }
  @HostListener("mouseout") onMouseOut() {
    if (this.highlightElms === "type" || this.highlightElms === "author") {
      this.element.nativeElement.style.border = "none"
    }

    if (this.highlightElms === "hashtags" || this.highlightElms === "author") {

      this.element.nativeElement.style.color = this.initColor;
    }
  }

  @HostListener("click") onClick() {
    if (this.highlightElms === 'title' || this.highlightElms === "author") {
      this.highlight = !this.highlight;
    }
  }
}
