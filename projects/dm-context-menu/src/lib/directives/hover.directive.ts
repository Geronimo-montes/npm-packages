import {
  Directive,
  EventEmitter,
  HostListener,
  Output
} from "@angular/core";
import { DMContextMenuService } from "../services/dm-context-menu.service";

@Directive({
  selector: "[dmHover]",
})
export class HoverDirective {
  constructor(protected readonly contextMenuService: DMContextMenuService) {}

  @Output("dmHover") onToggleSubMenu = new EventEmitter<boolean>();

  @HostListener("mouseenter")
  onMouseEnter() {
    this.onToggleSubMenu.emit(true);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.onToggleSubMenu.emit(false);
  }
}
