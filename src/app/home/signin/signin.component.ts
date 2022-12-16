import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./signin.component.html",
})
export class SignInComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  public loginForm: FormGroup;

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
}
