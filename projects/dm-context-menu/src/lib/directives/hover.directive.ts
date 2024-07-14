import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { DMContextMenuItem } from "../models/context-menu";
import { DMContextMenuService } from "../services/dm-context-menu.service";

@Directive({
  selector: "[dmHover]",
})
export class HoverDirective {
  constructor(protected readonly contextMenuService: DMContextMenuService) {}

  @Output("dmHover") onToggleSubMenu = new EventEmitter<boolean>();

  @HostListener("mouseenter")
  onMouseEnter() {
    // this.contextMenuService.toggleContextMenuItem(true, this.item);
    this.onToggleSubMenu.emit(true);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    // this.contextMenuService.toggleContextMenuItem(false, this.item);
    this.onToggleSubMenu.emit(false);
  }
}
