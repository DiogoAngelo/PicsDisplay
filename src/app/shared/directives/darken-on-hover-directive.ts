import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[apDarkenOnHover]",
})
export class DarkenOnHover {
  constructor(private el: ElementRef) {}

  @HostListener("mouseover")
  public darkenOn() {
    this.el.nativeElement.style.opacity = ".9";
  }

  @HostListener("mouseleave")
  public darkenOff() {
    if (this.el.nativeElement.style.opacity <= 1) {
      this.el.nativeElement.style.opacity = "1";
    }
  }
}
