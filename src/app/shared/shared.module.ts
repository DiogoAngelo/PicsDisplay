import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { FormValidationComponent } from "./validation-messages/form-validation.component";
import { DarkenOnHover } from "./directives/darken-on-hover.directive";
import { ImmediateClick } from "./directives/immediate-click.directive";
import { PhotoOwnerOnlyDirective } from "./directives/photo-owner-only.directive";
import { AlertComponent } from "./alert/alert.component";
import { ShowIfLoggedDirective } from "./directives/show-if-logged.directive";
import { ConfirmationModalComponent } from "./components/confirmation-modal/confirmation-modal.component";

@NgModule({
  declarations: [
    CardComponent,
    DarkenOnHover,
    FormValidationComponent,
    ImmediateClick,
    PhotoOwnerOnlyDirective,
    ShowIfLoggedDirective,
    AlertComponent,
    ConfirmationModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    DarkenOnHover,
    FormValidationComponent,
    ImmediateClick,
    PhotoOwnerOnlyDirective,
    ShowIfLoggedDirective,
    AlertComponent,
    ConfirmationModalComponent,
  ],
})
export class SharedModule {}
