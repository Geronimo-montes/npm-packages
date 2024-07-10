import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import {
  ActionDMContextMenu,
  DMContextMenuItem,
} from "../../models/context-menu";
import { DMContextMenuService } from "../../services/dm-context-menu.service";

@Component({
  selector: "dm-item-context-menu",
  templateUrl: "./dm-item-context-menu.component.html",
  styleUrls: ["./dm-item-context-menu.component.css"],
})
export class DMItemContextMenuComponent {
  constructor(protected readonly contextMenuService: DMContextMenuService) {}

  get default() {
    return () => {
      console.log("asqqwer");
    };
  }

  closeMenuEmitter($event: MouseEvent) {
    if (this.item.action.onClick) {
      this.onClickItem.emit(true);
      return this.item.action.onClick($event);
    } else {
      this.onClickItem.emit(false);
      return this.default;
    }
  }

  @Input("item") item!: DMContextMenuItem;

  @Output() onClickItem = new EventEmitter<any>();
}
