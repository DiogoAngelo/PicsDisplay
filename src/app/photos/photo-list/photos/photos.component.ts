import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Photo } from "../../photo/photo";

@Component({
  selector: "ap-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
})
export class PhotosComponent implements OnChanges {
  @Input() public photos: Photo[] = [];
  public rows: any = [];

  constructor() {}

  public ngOnChanges(change: SimpleChanges): void {
    if (change.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  public groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
