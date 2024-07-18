import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[dmKeyArrowLeft]",
})
export class KeyArrowLeftDirective {
  @Output("dmKeyArrowLeft") dmKeyArrowLeft: EventEmitter<KeyboardEvent> =
    new EventEmitter();
  constructor() {}

  @HostListener("keydown.arrowleft", ["$event"])
  onKeyArrowLeft($event: KeyboardEvent) {
    this.dmKeyArrowLeft.emit($event);
  }
}
