import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: "[dmContextMenu]",
})
export class ContextMenuDirective {
  @Output() dmContextMenu = new EventEmitter<boolean>();

  constructor() {}

  @HostListener("document:contextmenu", ["$event"])
  onContextMenu(event: MouseEvent) {
    event.preventDefault(); // Evita que aparezca el menú contextual nativo del navegador
    this.dmContextMenu.emit(true); // Emite el evento personalizado para abrir el menú contextual
  }
}
