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
  onClick?: (event: MouseEvent) => void;
  onHover?: (event: MouseEvent) => void;
  onDblClick?: (event: MouseEvent) => void;
  onRgtClick?: (event: MouseEvent) => void;
}

export type StringActionDMContextMenu =
  | "onClick"
  | "onHover"
  | "onDoubleClick"
  | "onRightClick";

export interface PointXY {
  top: number;
  left: number;
}
