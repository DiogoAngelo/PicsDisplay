import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { SignUpComponent } from "./signup/signup.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RouterModule],
})
export class HomeModule {}
