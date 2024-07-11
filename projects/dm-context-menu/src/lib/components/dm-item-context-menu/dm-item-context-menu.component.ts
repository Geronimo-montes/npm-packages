import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  DMContextMenuItem,
  DMContextmenuEventEmitt,
} from "../../models/context-menu";

@Component({
  selector: "dm-item-context-menu",
  templateUrl: "./dm-item-context-menu.component.html",
  styleUrls: ["./dm-item-context-menu.component.css"],
})
export class DMItemContextMenuComponent {
  @Input("item") item!: DMContextMenuItem;

  @Output("onSelectAction") onSelectAction =
    new EventEmitter<DMContextmenuEventEmitt>();
}
