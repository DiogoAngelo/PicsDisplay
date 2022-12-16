import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "ap-form-validation",
  templateUrl: "./form-validation.component.html",
})
export class FormValidationComponent {
  @Input() public control: AbstractControl;
}
