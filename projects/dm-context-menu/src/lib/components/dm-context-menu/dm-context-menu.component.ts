import { Component, HostListener, Input } from "@angular/core";
import { DMContextMenu, PointXY } from "../../models/context-menu";
import { contextMenuDefault } from "../../models/context-menu-default";

@Component({
  selector: "dm-context-menu",
  templateUrl: "./dm-context-menu.component.html",
  styleUrls: ["./dm-context-menu.component.css"],
})
export class DMContextMenuComponent {
  constructor() {}

  onShowContextMenu(show: any) {
    this.showContextMenu = show;
  }
  onEventAction(event: any) {
    this.showContextMenu = false;
  }

  public showContextMenu: boolean = false;

  @Input("context-menu") menu: DMContextMenu = contextMenuDefault;
}
