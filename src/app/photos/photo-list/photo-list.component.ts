import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { Photo } from "../photo/photo";
import { debounceTime } from "rxjs/operators";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit {
  public photos: Photo[] = [];
  public filter: string = "";
  public debounce: Subject<string> = new Subject<string>();
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
