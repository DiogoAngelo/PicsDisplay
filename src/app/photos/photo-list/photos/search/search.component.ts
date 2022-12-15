import {
  Component,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "ap-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent implements OnDestroy {
  private debounce: Subject<string> = new Subject<string>();
  @Output() public onTyping = new EventEmitter();
  @Input() public value = "";

  public debounceFilter(event) {
    this.debounce.next(event.target.value);
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((data) => this.onTyping.emit(data));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
