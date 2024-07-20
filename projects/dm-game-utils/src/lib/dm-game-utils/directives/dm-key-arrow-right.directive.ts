import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[dmKeyArrowRight]",
})
export class KeyArrowRightDirective {
  @Output("dmKeyArrowRight") dmKeyArrowRight: EventEmitter<KeyboardEvent> =
    new EventEmitter();
  constructor() {}

  @HostListener("window:keydown.arrowright", ["$event"])
  onKeyArrowRight($event: KeyboardEvent) {
    this.dmKeyArrowRight.emit($event);
  }
}
