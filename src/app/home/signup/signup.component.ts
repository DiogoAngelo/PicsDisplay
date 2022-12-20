import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserNotTakenValidatorService } from "src/app/Service/user-not-taken.validator.service";

@Component({
  templateUrl: "signup.component.html",
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userValidator: UserNotTakenValidatorService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      fullName: ["", [Validators.required]],
      userName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern(/^[a-z0-9_\-]+$/),
        ],
        this.userValidator.checkUserNameTaken(),
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
}
