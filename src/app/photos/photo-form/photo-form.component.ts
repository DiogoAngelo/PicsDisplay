import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhotoService } from "../../Service/photo.service";
import { Router } from "@angular/router";
import { AlertService } from "../../Service/alert.service";

@Component({
  selector: "ap-photo-form",
  templateUrl: "./photo-form.component.html",
  styleUrls: ["./photo-form.component.css"],
})
export class PhotoFormComponent implements OnInit {
  public photoForm: FormGroup;
  public file: File;
  public preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService
  ) {}

  public ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ["", Validators.required],
      description: ["", Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  public upload() {
    const description = this.photoForm.get("description").value;
    const allowComments = this.photoForm.get("allowComments").value;
    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => {
        this.alertService.success("Photo uploaded");
        this.router.navigate([""]);
      },
      (err) => console.log(err)
    );
  }

  public handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
