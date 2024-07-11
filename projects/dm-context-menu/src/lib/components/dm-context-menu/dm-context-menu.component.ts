import { Component, EventEmitter, Output } from "@angular/core";
import { Observable, map } from "rxjs";
import {
  DMContextMenuItem,
  DMContextmenuEventEmitt,
} from "../../models/context-menu";
import { DMContextMenuService } from "../../services/dm-context-menu.service";

@Component({
  selector: "dm-context-menu",
  templateUrl: "./dm-context-menu.component.html",
  styleUrls: ["./dm-context-menu.component.css"],
})
export class DMContextMenuComponent {
  constructor(protected readonly contextmenuService: DMContextMenuService) {}

  get items$(): Observable<DMContextMenuItem[]> {
    return this.contextmenuService.contextMenu$.pipe(
      map((value) => value.items)
    );
  }
  public showContextMenu: boolean = false;

  selectAction(event: DMContextmenuEventEmitt) {
    this.onSelectAction.emit(event);
  }

  @Output("onSelectAction") onSelectAction =
    new EventEmitter<DMContextmenuEventEmitt>();
}
