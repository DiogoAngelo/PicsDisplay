import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../../Service/photo.service";
import { Photo } from "../../shared/models/photo";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = [];
  public filter: string = "";
  public hasMore: boolean = true;
  public currentPage: number = 1;
  public userName: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data["photos"];
  }

  public load() {
    this.photoService
      .listFromUser(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = "";
        this.photos = this.photos.concat(...photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
