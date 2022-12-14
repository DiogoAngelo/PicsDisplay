import { Component, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router,
} from "@angular/router";
import { PhotoService } from "../../Service/photo.service";
import { Photo } from "../../shared/models/photo";
import { Observable } from "rxjs";
import { PhotoComment } from "../../shared/models/photo-comment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { switchMap, tap } from "rxjs/operators";
import { UserService } from "../../Service/user.service";
import { User } from "../../shared/models/user";
import { AlertService } from "../../Service/alert.service";

@Component({
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.css"],
})
export class PhotoDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  public photoId = this.route.snapshot.params.photoId;
  public photo$: Observable<Photo>;
  public comments$: Observable<PhotoComment[]>;
  public commentsForm: FormGroup;
  public user: string;
  public canOpenModal: boolean = false;

  public ngOnInit() {
    this.user = this.userService.getUserName;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => {
        this.router.navigate(["/not-found"]);
      }
    );

    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentsForm = this.formBuilder.group({
      comment: ["", [Validators.required, Validators.maxLength(300)]],
    });
  }

  public postComment() {
    const comment = this.commentsForm.get("comment").value;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => this.commentsForm.reset()));
  }

  public likePhoto(photoId: number) {
    this.photoService.likePhoto(photoId).subscribe(() => {
      this.photo$ = this.photoService.findById(photoId);
    });
  }
  public toggleModal() {
    this.canOpenModal = !this.canOpenModal;
  }
}
