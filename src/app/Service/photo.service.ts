import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Photo } from "../shared/models/photo";
import { PhotoComment } from "../shared/models/photo-comment";

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
    return this.http.post(`${environment.url}/photos/upload`, formData);
  }

  public findById(photoId: number) {
    return this.http.get<Photo>(`${environment.url}/photos/${photoId}`);
  }

  public addComment(photoId: number, commentText: string) {
    return this.http.post(`${environment.url}/photos/${photoId}/comments`, {
      commentText,
    });
  }

  public getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(
      `${environment.url}/photos/${photoId}/comments`
    );
  }

  public removePhoto(photoId: number) {
    return this.http.delete(`${environment.url}/photos/${photoId}`);
  }
}
