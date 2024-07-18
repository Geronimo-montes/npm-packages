import { DMColliderFunc } from "./dm-colaider.interface";
import DmGameManager from "./dm-game-manager.model";
import {
  DMConfigRender,
  DMGlobalConfigRender,
  DMRenderFunc,
  DMRenderSettingsInterface,
} from "./dm-render.interface";

/**
 * Interface initializer config options
 */
export interface DMConfigGameManager {
  colliderHelper: DMColliderFunc;
  rendererHelper: DMRenderFunc;
  renderSettings: DMGlobalConfigRender;
  listGameClass: DMGameLogicList[];
}

/**
 * Clase base para crear la logica de juego mantieniedo la relacion entre las instancias de clase
 */
export abstract class DMGameLogic {}

/**
 * Class list the logic game.
 */
export type DMGameLogicList = Array<DMGameLogic>;

export interface DMConfigGameManagerService {
  gameManager: DmGameManager;
  renderSettings: DMGlobalConfigRender;
  renderHelper: DMRenderFunc;
  colliderHelper: DMColliderFunc;
}
