import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "../../Service/photo.service";
import { Photo } from "../../shared/models/photo";

@Injectable({
  providedIn: "root",
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private photoService: PhotoService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const userName = route.params.userName;

    return this.photoService.listFromUser(userName, 1);
  }
}
