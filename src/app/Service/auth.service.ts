import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  public authenticate(userName: string, password: string) {
    return this.http
      .post(
        `${environment.url}/user/login`,
        {
          userName,
          password,
        },
        { observe: "response" }
      )
      .pipe(
        tap((res) => {
          const token = res.headers.get("x-access-token");
          this.userService.setToken(token);
        })
      );
  }
}
