import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[dmKeyArrowUp]",
})
export class KeyArrowUpDirective {
  @Output("dmKeyArrowUp") dmKeyArrowUp: EventEmitter<KeyboardEvent> =
    new EventEmitter();
  constructor() {}

  @HostListener("window:keydown.arrowup", ["$event"])
  onKeyArrowUp($event: KeyboardEvent) {}
}
