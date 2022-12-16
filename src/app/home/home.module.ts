import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
