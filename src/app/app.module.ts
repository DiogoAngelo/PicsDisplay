import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { PhotosModule } from "./photos/photos.module";
import { AppRoutingModule } from "./app.routing.module";
import { ErrorsModule } from "./errors/errors.module";
import { CoreModule } from "./core/core.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./core/request.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
