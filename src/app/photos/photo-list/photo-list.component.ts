import { Component, OnDestroy, OnInit } from "@angular/core";
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
export class PhotoListComponent implements OnInit, OnDestroy {
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
    this.debounce.pipe(debounceTime(300)).subscribe((filter) => {
      this.filter = filter;
    });
  }

  public debounceFilter(event) {
    this.debounce.next(event.target.value);
  }

  public ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  public load() {
    this.photoService
      .listFromUser(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(...photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
