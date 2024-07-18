import { DMConfigGameManager } from "../models/dm-game-manager.interface.js";
import { DMGameManagerService } from "../services/dm-game-manager.service";
import { DmColaiderHelper } from "./dm-colaider.helper";
import DmGameManager from "../models/dm-game-manager.model.js";
import { DMRenderHelper } from "./dm-render.helper";

/**
 * Funcion inicializadora para el servicio DMGameManagerService.
 *
 * @param config
 * @param service
 * @returns
 */
export const dmInicializerGameManager = (
  config: DMConfigGameManager,
  service: DMGameManagerService
): (() => Promise<void>) => {
  return () => {
    const {
      colliderHelper,
      gameManagerHelper,
      rendererHelper,
      ListGameClass,
      canvasSize,
      gridBoxSizing,
      gridPixelSizing,
    } = config;

    return service.initialize(config);
  };
};

export const dmConfigInitGameManager: DMConfigGameManager = {
  gameManagerHelper: new DmGameManager(),
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasSize: 50,
  gridBoxSizing: 50,
  gridPixelSizing: 10,
  ListGameClass: [],
};
