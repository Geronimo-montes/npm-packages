import { Inject, Injectable } from "@angular/core";
import { DMContextMenu, DMContextMenuItem } from "../models/context-menu";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class DMContextMenuService {
  private _contextMenu: DMContextMenu;

  private subjectContextMenu: BehaviorSubject<DMContextMenu>;

  public contextMenu$: Observable<DMContextMenu>;

  constructor(
    @Inject("CONTEXT_MENU_CONFIG") private contextMenuConfig: DMContextMenu
  ) {
    this._contextMenu = contextMenuConfig;
    this.subjectContextMenu = new BehaviorSubject<DMContextMenu>(
      contextMenuConfig
    );
    this.contextMenu$ = this.subjectContextMenu.asObservable();
  }

  public contextMenu() {
    this.subjectContextMenu.next(this._contextMenu);
  }

  // FIXME: NO FUNCIONA DE FORMA ADECUADA
  public reset(item: DMContextMenuItem) {
    const reset = (items: DMContextMenuItem[]) => {
      for (let index = 0; index < items.length; index++) {
        if (!items[index].showChilds && !items[index].childs.includes(item)) {
          items[index].showChilds = false;
        }
        reset(items[index].childs);
      }
    };

    reset(this._contextMenu.items);
  }

  public showChilds(item: DMContextMenuItem) {
    const findTarget = (
      items: DMContextMenuItem[],
      target: DMContextMenuItem
    ) => {
      for (let index = 0; index < items.length; index++) {
        if (!items[index].childs) continue;

        if (items[index] == target) {
          items[index].showChilds = true;
        } else {
          items[index].showChilds = false;
          findTarget(items[index].childs, target);
        }
      }
    };

    findTarget(this._contextMenu.items, item);
  }
}
