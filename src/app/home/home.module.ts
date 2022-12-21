import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { SignUpComponent } from "./signup/signup.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
