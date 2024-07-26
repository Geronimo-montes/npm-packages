import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[dmKeySpace]",
})
export class KeySpaceDirective {
  @Output("dmKeySpace") dmKeySpace: EventEmitter<KeyboardEvent> =
    new EventEmitter();

  constructor() {}

  /**
   * Detects the 'space' key press event and emits the event through dmKeySpace EventEmitter.
   * @param $event The keyboard event triggered when the space key is pressed.
   */
  @HostListener("window:keydown.space", ["$event"])
  onKeySpaceDown($event: KeyboardEvent) {
    console.log($event);
    this.dmKeySpace.emit($event);
  }
}
