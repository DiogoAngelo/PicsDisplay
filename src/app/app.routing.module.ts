import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { AuthGuard } from "./guards/auth.guard";
import { PhotoDetailsComponent } from "./photos/photo-details/photo-details.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule",
  },
  {
    path: "user/:userName",
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
    data: { title: "Timeline" },
  },
  {
    path: "p/add",
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: { title: "Photo upload" },
  },
  {
    path: "p/:photoId",
    component: PhotoDetailsComponent,
    data: { title: "Photo details" },
  },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found", data: { title: "Page not found" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
