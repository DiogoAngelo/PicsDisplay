import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authenticate(userName: string, password: string) {
    return this.http.post(`${environment.url}/user/login`, {
      userName,
      password,
    });
  }
}
