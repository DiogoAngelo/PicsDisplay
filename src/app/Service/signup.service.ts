import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { NewUser } from "../shared/models/new-user";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(private http: HttpClient) {}

  public checkUserName(userName: string) {
    return this.http.get(`${environment.url}/user/exists/${userName}`);
  }

  public signUp(newUser: NewUser) {
    return this.http.post(`${environment.url}/user/signup`, newUser);
  }
}
