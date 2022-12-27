import { Directive } from "@angular/core";
import { Photo } from "../models/photo";
import { Input } from "@angular/core";

@Directive({
  selector: "[PhotoOwnerOnly]",
})
export class PhotoOwnerOnlyDirective {
  @Input() photoOwned: Photo;

  constructor() {}
}
