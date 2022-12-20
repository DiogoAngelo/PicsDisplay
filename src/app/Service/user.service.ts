import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../shared/models/user";
import { TokenService } from "./token.service";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  public setToken(token) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  public getUser() {
    return this.userSubject.asObservable();
  }

  public get getUserName() {
    return this.userName;
  }

  public decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
}
