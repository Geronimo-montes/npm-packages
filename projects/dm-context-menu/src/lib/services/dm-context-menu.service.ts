import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DMContextMenu } from "../models/context-menu";

@Injectable()
export class DMContextMenuService {
  //

  private _contextMenu: DMContextMenu;
  private subjectContextMenu: BehaviorSubject<DMContextMenu>;
  public contextMenu$: Observable<DMContextMenu>;

  constructor(
    @Inject("CONTEXT_MENU_CONFIG") private contextMenuConfig: DMContextMenu
  ) {
    this._contextMenu = contextMenuConfig;
    this.subjectContextMenu = new BehaviorSubject<DMContextMenu>(
      this._contextMenu
    );
    this.contextMenu$ = this.subjectContextMenu.asObservable();
  }
}
