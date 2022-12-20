import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SignupService } from "src/app/Service/signup.service";
import { UserNotTakenValidatorService } from "src/app/Service/user-not-taken.validator.service";
import { NewUser } from "src/app/shared/models/new-user";

@Component({
  templateUrl: "signup.component.html",
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userValidator: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router
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

  public signup() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser).subscribe(
      () => {
        this.router.navigate([""]);
      },
      (err) => console.log(err)
    );
  }
}
