import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Service/auth.service";

@Component({
  templateUrl: "./signin.component.html",
})
export class SignInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  @ViewChild("userNameInput")
  public userNameInput: ElementRef<HTMLInputElement>;
  public loginForm: FormGroup;

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  public login() {
    const userName = this.loginForm.controls.userName.value;
    const password = this.loginForm.controls.password.value;
    this.authService.authenticate(userName, password).subscribe(
      (data) => {
        this.router.navigate(["user", userName]);
      },
      (err) => {
        this.loginForm.reset();
        this.userNameInput.nativeElement.focus();
        console.log(err);
      }
    );
  }
}
