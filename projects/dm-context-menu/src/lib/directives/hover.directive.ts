import { Directive, HostListener, Input } from "@angular/core";
import { DMContextMenuService } from "../services/dm-context-menu.service";
import { DMContextMenuItem } from "../models/context-menu";

@Directive({
  selector: "[dmHover]",
})
export class HoverDirective {
  constructor(protected readonly contextMenuService: DMContextMenuService) {}

  @Input("dmHover") item!: DMContextMenuItem;

  @HostListener("mouseover", ["$event"])
  onHover(event: Event) {
    event.preventDefault();
    this.contextMenuService.showChilds(this.item);
  }

  @HostListener("mouseout", ["$event"])
  onMouseOut(event: Event) {
    console.log({ event });
    event.preventDefault();
    this.contextMenuService.reset(this.item);
  }
}
