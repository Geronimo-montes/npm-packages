import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { DMContextMenuItem } from "../../models/context-menu";
import { DMContextMenuService } from "../../services/dm-context-menu.service";

@Component({
  selector: "dm-context-menu",
  templateUrl: "./dm-context-menu.component.html",
  styleUrls: ["./dm-context-menu.component.css"],
})
export class DMContextMenuComponent implements OnInit {
  constructor(protected readonly contextmenuService: DMContextMenuService) {}

  ngOnInit(): void {
    this.contextmenuService.showContextMenu$.subscribe(
      (show) => (this.showContextMenu = show)
    );
  }

  get items$(): Observable<DMContextMenuItem[]> {
    return this.contextmenuService.items$;
  }

  toggleContextMenu(show: boolean) {
    this.contextmenuService.showContextMenu(show);
  }

  getshowContextMenu(): Observable<boolean> {
    return this.contextmenuService.showContextMenu$;
  }

  selectAction(event: DMContextMenuItem) {
    this.onSelectAction.emit(event);
  }

  @Output("onSelectAction") onSelectAction =
    new EventEmitter<DMContextMenuItem>();
  public showContextMenu: boolean = false;
}
