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
  selector: "[dmClick]",
})
export class ClickDirective {
  constructor(protected readonly contextmenuService: DMContextMenuService) {}

  @Input("dmClick") dmClickitem!: DMContextMenuItem;

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    event.preventDefault();
    this.contextmenuService.selectItem(this.dmClickitem);
  }
}
