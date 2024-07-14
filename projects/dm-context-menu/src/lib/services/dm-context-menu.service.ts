import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { DMContextMenu, DMContextMenuItem } from "../models/context-menu";

@Injectable()
export class DMContextMenuService {
  //

  private _contextMenu: DMContextMenu;
  public contextMenu$: Observable<DMContextMenu>;
  public items$: Observable<DMContextMenuItem[]>;
  public showContextMenu$: Observable<boolean>;
  private subMenu: BehaviorSubject<DMContextMenu>;
  private subItems: BehaviorSubject<DMContextMenuItem[]>;
  private subShowMenu = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject("CONTEXT_MENU_CONFIG") private contextMenuConfig: DMContextMenu
  ) {
    this._contextMenu = contextMenuConfig;
    this.subMenu = new BehaviorSubject<DMContextMenu>(this._contextMenu);
    this.subItems = new BehaviorSubject<DMContextMenuItem[]>(
      this._contextMenu.items
    );
    this.contextMenu$ = this.subMenu.asObservable();
    this.items$ = this.subItems.asObservable();
    this.showContextMenu$ = this.subShowMenu.asObservable();
  }

  public showContextMenu(show: boolean) {
    this.subShowMenu.next(show);
  }

  public toggleContextMenuItem(toggle: boolean, item: DMContextMenuItem) {
    item.showChilds = toggle;
    this.updateItems();
  }

  public updateItems() {
    this.subItems.next([...this._contextMenu.items]);
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
    this.updateItems();
  }
}
