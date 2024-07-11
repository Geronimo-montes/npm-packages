import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { DMContextMenu, DMContextMenuItem } from "../models/context-menu";

@Injectable()
export class DMContextMenuService {
  //

  private _contextMenu: DMContextMenu;
  public contextMenu$: Observable<DMContextMenu>;
  private subjectContextMenu: BehaviorSubject<DMContextMenu>;
  private subjectShowContextMenu = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject("CONTEXT_MENU_CONFIG") private contextMenuConfig: DMContextMenu
  ) {
    this._contextMenu = contextMenuConfig;
    this.subjectContextMenu = new BehaviorSubject<DMContextMenu>(
      this._contextMenu
    );
    this.contextMenu$ = this.subjectContextMenu.asObservable();
  }

  public toggleContextMenu(toggle: boolean) {
    this.subjectShowContextMenu.next(toggle);
  }

  public closeMenu() {
    const setFlagRecursive = (item: DMContextMenuItem) => {
      item.showChilds = false;

      if (item.childs && item.childs.length > 0) {
        item.childs.forEach((child) => setFlagRecursive(child));
      }
    };

    const setFlagOnAllItems = (items: DMContextMenuItem[]) => {
      items.forEach((item) => setFlagRecursive(item));
    };

    setFlagOnAllItems(this._contextMenu.items);
  }
}
