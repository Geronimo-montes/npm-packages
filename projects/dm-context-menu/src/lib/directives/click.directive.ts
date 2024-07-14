import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import {
  DMContextMenuItem,
  DMContextmenuEventEmitt,
} from "../models/context-menu";
import { DMContextMenuService } from "../services/dm-context-menu.service";

@Directive({
  selector: "[dmClick]",
})
export class ClickDirective {
  constructor(protected readonly contextmenuService: DMContextMenuService) {}

  @Input() dmClickitem!: DMContextMenuItem;
  @Output() valueEmitted = new EventEmitter<DMContextMenuItem>();

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    event.preventDefault();

    this.valueEmitted.emit(this.dmClickitem);
    this.contextmenuService.closeMenu();
  }
}
