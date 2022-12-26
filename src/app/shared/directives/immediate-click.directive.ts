import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[ImmediateClick]",
})
export class ImmediateClick implements OnInit {
  constructor(private element: ElementRef<any>) {}

  public ngOnInit() {
    this.element.nativeElement.click();
  }
}
