import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[dmKeyArrowDown]",
})
export class KeyArrowDownDirective {
  @Output("dmKeyArrowDown") dmKeyArrowDown: EventEmitter<KeyboardEvent> =
    new EventEmitter();
  constructor() {}

  @HostListener("window:keydown.arrowdown", ["$event"])
  onKeyArrowDowm($event: KeyboardEvent) {
    this.dmKeyArrowDown.emit($event);
  }
}
