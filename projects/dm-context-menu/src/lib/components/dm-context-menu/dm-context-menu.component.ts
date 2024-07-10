import { Component, HostListener, Input, OnInit } from "@angular/core";
import { DMContextMenu, PointXY } from "../../models/context-menu";
import { contextMenuDefault } from "../../models/context-menu-default";
import { DMContextMenuService } from "../../services/dm-context-menu.service";
import { Observable } from "rxjs";

@Component({
  selector: "dm-context-menu",
  templateUrl: "./dm-context-menu.component.html",
  styleUrls: ["./dm-context-menu.component.css"],
})
export class DMContextMenuComponent implements OnInit {
  constructor(protected readonly contextmenuService: DMContextMenuService) {
    this.contextmenuService.contextMenu$.subscribe(
      (contextmenu: DMContextMenu) => (this.menu = contextmenu)
    );
  }

  ngOnInit(): void {}

  onShowContextMenu(show: any) {
    this.showContextMenu = show;
  }

  onEventAction(event: any) {
    this.showContextMenu = false;
  }

  public showContextMenu: boolean = false;

  // get menu() {
  //   return new Observable((obs) => obs.next(this._menu));
  // }
  public menu: DMContextMenu | undefined;
}
