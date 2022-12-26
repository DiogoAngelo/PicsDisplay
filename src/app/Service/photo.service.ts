import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Photo } from "../shared/models/photo";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  public listFromUser(userName: string, page?: number) {
    const params = new HttpParams().append("page", page.toString());
    return this.http.get<[Photo]>(`${environment.url}/${userName}/photos`, {
      params,
    });
  }

  public upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("allowComments", allowComments ? "true" : "false");
    formData.append("imageFile", file);
    console.log(formData);
    return this.http.post(`${environment.url}/photos/upload`, formData);
  }
}
