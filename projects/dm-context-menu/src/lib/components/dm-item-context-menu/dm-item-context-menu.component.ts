import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  ActionDMContextMenu,
  DMContextMenuItem,
} from "../../models/context-menu";

@Component({
  selector: "dm-item-context-menu",
  templateUrl: "./dm-item-context-menu.component.html",
  styleUrls: ["./dm-item-context-menu.component.css"],
})
export class DMItemContextMenuComponent {
  constructor() {}

  get default() {
    return () => {
      console.log("asqqwer");
    };
  }

  closeMenuEmitter($event: MouseEvent) {
    if (this.actions.onClick) {
      this.onSelectAcction.emit(true);
      return this.actions.onClick($event);
    } else {
      this.onSelectAcction.emit(false);
      return this.default;
    }
  }

  @Input("title") title!: string;
  @Input("actions") actions!: ActionDMContextMenu;
  @Input("childs") childs: DMContextMenuItem[] = [];
  @Input("show-sub-menu") showChilds: boolean = false;
  @Input("class") class: string = "context-menu-item";

  @Output() onSelectAcction = new EventEmitter<boolean>();
}
