import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/Service/user.service";
import { User } from "src/app/shared/models/user";

@Component({
  selector: "ap-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  public user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }

  public logout() {
    this.userService.logout();
    this.router.navigate([""]);
  }
}
