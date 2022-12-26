import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { LoginGuard } from "../guards/login.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      { path: "", component: SignInComponent },
      { path: "signup", component: SignUpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
