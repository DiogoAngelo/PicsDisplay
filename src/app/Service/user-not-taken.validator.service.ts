import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SignupService } from "./signup.service";
import { debounceTime, first, map, switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserNotTakenValidatorService {
  constructor(private signUpService: SignupService) {}

  public checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((value) => {
            return this.signUpService.checkUserName(value);
          })
        )
        .pipe(map((data) => (data ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
