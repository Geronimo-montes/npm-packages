import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  ElementRef,
  Renderer2,
} from "@angular/core";

/**
 * HostListiner events on document for show/close ContextMenuCustom.7
 * Disble default context-menu
 */
@Directive({
  selector: "[dmContextMenuContent]",
})
export class ContextMenuContentDirective {
  @Input("dmContextMenuContent") show: boolean = false;
  @HostBinding("style.display") display = "none";
  @HostBinding("style.position") position = "fixed";
  @HostBinding("style.top.px") top: number = 0;
  @HostBinding("style.left.px") left: number = 0;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.display = "none";
      this.show = false; // Oculta el menú contextual si el clic fue fuera de él
    }
  }

  @HostListener("document:contextmenu", ["$event"])
  onDocumentContextMenu(event: MouseEvent) {
    this.show = true;
    this.display = "block";
    this.top = event.clientY;
    this.left = event.clientX;
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.show = false; // Oculta el menú contextual si el clic derecho fue fuera de él
    }
  }
}
