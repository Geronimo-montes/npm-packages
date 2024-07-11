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

  @Input('dmClick') item!: DMContextMenuItem;
  @Output() valueEmitted = new EventEmitter<DMContextmenuEventEmitt>();

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    event.preventDefault();

    if (this.item.action.onClick) {
      let value: DMContextmenuEventEmitt = {
        item: this.item,
        callback: this.item.action.onClick
          ? this.item.action.onClick
          : (event: MouseEvent) => {},
        nameAction: "onClickItemContextMenu",
      };
      console.log({ value });
      this.contextmenuService.closeMenu();
      this.valueEmitted.emit(value);
      // Handle the click action, e.g., emit an event or call a service method
    }
  }
}
