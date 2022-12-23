import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoFormComponent } from "./photo-form/photo-form.component";
import { PhotosComponent } from "./photo-list/photos/photos.component";
import { FilterByDescriptionPipe } from "./photo-list/photos/filter-by-description.pipe";
import { LoadButtonComponent } from "./photo-list/load-button/load-button.component";
import { SharedModule } from "../shared/shared.module";
import { SearchComponent } from "./photo-list/photos/search/search.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    PhotoComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class PhotosModule {}
