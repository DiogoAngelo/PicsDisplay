import { Directive, ElementRef, OnInit } from "@angular/core";
import { Photo } from "../models/photo";
import { Input } from "@angular/core";
import { UserService } from "../../Service/user.service";

@Directive({
  selector: "[PhotoOwnerOnly]",
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() photoOwned: Photo;

  constructor(private element: ElementRef, private userService: UserService) {}

  public ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      if (!user || user.id !== this.photoOwned.userId) {
        this.element.nativeElement.style = "display: none";
      }
    });
  }
}
