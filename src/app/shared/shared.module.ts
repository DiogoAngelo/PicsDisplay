import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { DarkenOnHover } from "./directives/darken-on-hover-directive";
import { FormValidationComponent } from "./validation-messages/form-validation.component";

@NgModule({
  declarations: [CardComponent, DarkenOnHover, FormValidationComponent],
  imports: [CommonModule],
  exports: [CardComponent, DarkenOnHover, FormValidationComponent],
})
export class SharedModule {}
