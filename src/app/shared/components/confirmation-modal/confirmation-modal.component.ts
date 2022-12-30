import { Component, Output, EventEmitter } from "@angular/core";
import { Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PhotoService } from "../../../Service/photo.service";
import { AlertService } from "../../../Service/alert.service";

@Component({
  selector: "ap-confirmation-modal[modalMessage]",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.css"],
})
export class ConfirmationModalComponent {
  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  @Output() openChange = new EventEmitter();
  @Input() open: boolean = true;
  @Input() modalMessage: string;
  @Input() modalConfirmButton: string = "Remove";
  @Input() modalConfirmButtonColor: string = "btn-danger";
  @Input() modalCancelButton: string = "Cancel";
  @Input() modalCancelButtonColor: string = "btn-secondary";
  public photoId = this.route.snapshot.params.photoId;

  public toggleModal() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  public removePhoto() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.toggleModal();
        this.alertService.danger("Photo removed");
        this.router.navigate([""]);
      },
      (err) => this.alertService.danger("The photo could not be removed")
    );
  }
}
