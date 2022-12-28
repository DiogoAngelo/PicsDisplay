import { Directive, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../../Service/user.service";

@Directive({
  selector: "[ShowIfLogged]",
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(private userService: UserService, private element: ElementRef) {}

  public ngOnInit() {
    if (!this.userService.isLogged()) {
      this.element.nativeElement.style = "display: none";
    }
  }
}
