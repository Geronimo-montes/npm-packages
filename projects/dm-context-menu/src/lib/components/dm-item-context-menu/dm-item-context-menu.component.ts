import { Component, Input } from "@angular/core";
import { DMContextMenuItem } from "../../models/context-menu";

@Component({
  selector: "dm-item-context-menu",
  templateUrl: "./dm-item-context-menu.component.html",
  styleUrls: ["./dm-item-context-menu.component.css"],
})
export class DMItemContextMenuComponent {
  @Input("item") item!: DMContextMenuItem;
}
