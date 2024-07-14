import { Directive, HostListener, Output, EventEmitter } from "@angular/core";
import { DMContextMenuService } from "../services/dm-context-menu.service";

@Directive({
  selector: "[dmContextMenu]",
})
export class ContextMenuDirective {
  constructor(private readonly contextMenuService: DMContextMenuService) {}

  @HostListener("document:contextmenu", ["$event"])
  onContextMenu(event: MouseEvent) {
    event.preventDefault(); // Evita que aparezca el menú contextual nativo del navegador
    this.contextMenuService.showMenu(true);
  }
}
