import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { DarkenOnHover } from "./directives/darken-on-hover-directive";

@NgModule({
  declarations: [CardComponent, DarkenOnHover],
  imports: [CommonModule],
  exports: [CardComponent, DarkenOnHover],
})
export class SharedModule {}
