import { DMColliderFunc } from "./dm-colaider.interface";
import DmGameManager from "./dm-game-manager.model";
import { DMRenderFunc } from "./dm-render.interface";

/**
 * Interface initializer config options
 */
export interface DMConfigGameManager {
  colliderHelper: DMColliderFunc;
  gameManagerHelper: DmGameManager;
  rendererHelper: DMRenderFunc;
  canvasSize: number;
  gridBoxSizing: number;
  gridPixelSizing: number;
  ListGameClass: any[];
}
