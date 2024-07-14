import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DMContextMenuItem } from "../../models/context-menu";

@Component({
  selector: "dm-item-context-menu",
  templateUrl: "./dm-item-context-menu.component.html",
  styleUrls: ["./dm-item-context-menu.component.css"],
})
export class DMItemContextMenuComponent {
  @Input("item") item!: DMContextMenuItem;
  @Input("firstElement") firstElement!: boolean;

  @Output("onSelectAction") onSelectAction =
    new EventEmitter<DMContextMenuItem>();

  selectAction(event: DMContextMenuItem) {
    this.onSelectAction.emit(event);
  }
}
