import { Injectable } from "@angular/core";

const KEY = "authToken";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  public setToken(token) {
    localStorage.setItem(KEY, token);
  }

  public hasToken() {
    return !!this.getToken();
  }

  public getToken() {
    return localStorage.getItem(KEY);
  }

  public removeToken() {
    localStorage.removeItem(KEY);
  }
}
