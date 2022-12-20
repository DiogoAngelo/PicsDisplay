import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(private http: HttpClient) {}

  public checkUserName(userName: string) {
    return this.http.get(`${environment.url}/user/exists/${userName}`);
  }
}
