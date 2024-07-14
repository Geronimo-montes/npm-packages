import {
  Directive,
  HostListener,
  Input
} from "@angular/core";
import { DMContextMenuItem } from "../models/context-menu";
import { DMContextMenuService } from "../services/dm-context-menu.service";

@Directive({
  selector: "[dmHover]",
})
export class HoverDirective {
  constructor(protected readonly contextMenuService: DMContextMenuService) {}

  @Input("dmHover") dmHoverItem!: DMContextMenuItem;

  @HostListener("mouseenter")
  onMouseEnter() {
    this.contextMenuService.toggleContextMenuItem(true, this.dmHoverItem);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.contextMenuService.toggleContextMenuItem(false, this.dmHoverItem);
  }
}
