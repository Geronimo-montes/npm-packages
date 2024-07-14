import { Inject, Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject, from } from "rxjs";
import { expand, takeUntil, tap } from "rxjs/operators";
import {
  DMContextMenu,
  DMContextMenuItem,
  PositionTopLefth,
} from "../models/context-menu";

@Injectable()
export class DMContextMenuService implements OnDestroy {
  public destroy$ = new Subject();

  private _contextMenu: DMContextMenu;
  private _position: PositionTopLefth;
  private positionMenu: BehaviorSubject<PositionTopLefth>;
  private subMenu: BehaviorSubject<DMContextMenu>;
  private subShowMenu = new BehaviorSubject<boolean>(false);
  private selectedItemSubject = new Subject<DMContextMenuItem>();

  /**
   * Subject to emit submenu updates.
   * In the constructor, subscribes to submenu updates.
   */
  private subMenuUpdates = new Subject<DMContextMenuItem>();

  /**
   * Observable for the current menu position.
   */
  public positionMenu$: Observable<PositionTopLefth>;

  /**
   * Observable for the context menu.
   */
  public contextMenu$: Observable<DMContextMenu>;

  /**
   * Observable for the context menu show state.
   */
  public showMenu$: Observable<boolean>;

  /**
   * Observable for the selected item.
   */
  public selectedItem$ = this.selectedItemSubject.asObservable();

  constructor(
    @Inject("CONTEXT_MENU_CONFIG") private contextMenuConfig: DMContextMenu
  ) {
    this._contextMenu = contextMenuConfig;
    this._position = { left: 0, top: 0 };
    this.subMenu = new BehaviorSubject<DMContextMenu>(this._contextMenu);
    this.positionMenu = new BehaviorSubject<PositionTopLefth>(this._position);
    this.contextMenu$ = this.subMenu.asObservable();
    this.showMenu$ = this.subShowMenu.asObservable();
    this.positionMenu$ = this.positionMenu.asObservable();

    this.subMenuUpdates
      .pipe(
        expand((item: DMContextMenuItem) =>
          item.childs && item.childs.length > 0 ? of(...item.childs) : of()
        ),
        tap((item: DMContextMenuItem) => (item.showChilds = false)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        complete: () => this.updateItems(),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  public showMenu(show: boolean) {
    if (!show) this.closeMenu();
    this.subShowMenu.next(show);
  }

  public updatePosition(pointer: PositionTopLefth) {
    this.positionMenu.next(pointer);
  }

  public toggleContextMenuItem(toggle: boolean, item: DMContextMenuItem) {
    item.showChilds = toggle;
    this.updateItems();
  }

  public updateItems() {
    this.subMenu.next({
      ...this._contextMenu,
      items: [...this._contextMenu.items],
    });
  }

  public closeMenu() {
    this._contextMenu.items.forEach((item) => this.subMenuUpdates.next(item));
  }

  public selectItem(item: DMContextMenuItem) {
    if (!item.childs.length) {
      this.selectedItemSubject.next(item);
      this.closeMenu();
    }
  }
}
