import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../Service/user.service";
import { Observable } from "rxjs";
import { User } from "../../../shared/models/user";

@Component({
  selector: "ap-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private userService: UserService) {}

  public ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
