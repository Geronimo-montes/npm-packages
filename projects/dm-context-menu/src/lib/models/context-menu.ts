export interface DMContextMenu {
  items: DMContextMenuItem[];
  styles: StyleDMContextMenu;
}
export interface StyleDMContextMenu {
  [key: string]: string;
}
export interface DMContextMenuItem {
  title: string;
  action: ActionDMContextMenu;
  childs: DMContextMenuItem[];
  showChilds: boolean;
}

export const defaultActionDMContextMenu = ($event: MouseEvent) =>
  console.debug({ $event });

export type DMDefaultAction = typeof defaultActionDMContextMenu;

export interface ActionDMContextMenu {
  onClick?: (args: any) => void;
  onHover?: (args: any) => void;
  onDblClick?: (args: any) => void;
  onRgtClick?: (args: any) => void;
}

export type StringActionDMContextMenu =
  | "onClick"
  | "onHover"
  | "onDoubleClick"
  | "onRightClick";

export interface PositionTopLefth {
  top: number;
  left: number;
}

export interface DMContextmenuEventEmitt {
  item: DMContextMenuItem;
  callback: (event: MouseEvent) => void;
  nameAction: string;
}
