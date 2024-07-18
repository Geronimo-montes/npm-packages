import {
  DMConfigGameManager,
  DMGameLogic,
} from "../models/dm-game-manager.interface.js";
import { DMGameManagerService } from "../services/dm-game-manager.service.js";
import { DmColaiderHelper } from "./dm-colaider.helper.js";
import DmGameManager from "../models/dm-game-manager.model.js";
import { DMRenderHelper } from "./dm-render.helper.js";
import { DMColliderInterface } from "../models/dm-colaider.interface.js";
import {
  DMRenderInterface,
  DMRenderSettingsInterface,
} from "../models/dm-render.interface.js";

/**
 * Funcion inicializadora para el servicio DMGameManagerService.
 *
 * @param config
 * @param service
 * @returns
 */
export const DMGameManagerHelper = (
  config: DMConfigGameManager,
  service: DMGameManagerService
): (() => Promise<void>) => {
  return () => {
    const { colliderHelper, rendererHelper, listGameClass, renderSettings } =
      config;

    const notValidInstancesList: boolean = listGameClass.some(
      (value) => !isValidInstance(value)
    );
    if (notValidInstancesList)
      throw new Error("Error en las intancias de GameLogi");

    const gameManager: DmGameManager = new DmGameManager(
      listGameClass,
      renderSettings
    );

    return service.initialize({
      gameManager,
      renderSettings,
      renderHelper: rendererHelper,
      colliderHelper: colliderHelper,
    });
  };
};

export const dmConfigInitGameManager: DMConfigGameManager = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  renderSettings: {
    canvasSize: 50,
    heightGrid: 50,
    widthGrid: 50,
    pixel: 10,
  },
  listGameClass: [],
};

/**
 *
 * @param obj
 * @returns
 */
const isValidInstance = (
  obj: any
): obj is DMGameLogic &
  DMRenderInterface &
  DMRenderSettingsInterface &
  DMColliderInterface => {
  return (
    obj instanceof DMGameLogic &&
    typeof (obj as DMRenderInterface).render === "function" &&
    typeof (obj as DMRenderSettingsInterface).getRenderSettings ===
      "function" &&
    typeof (obj as DMColliderInterface).getConfigCollision === "function" &&
    typeof (obj as DMColliderInterface).detectCollisions === "function"
  );
};
