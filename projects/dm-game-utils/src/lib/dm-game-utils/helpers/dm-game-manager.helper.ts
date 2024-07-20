import {
  DMGameManageAPI,
  DMConfigGameManagerService,
} from "../models/dm-game-manager.interface.js";
import { DMGameManagerService } from "../services/dm-game-manager.service.js";

/**
 * Funcion inicializadora para el servicio DMGameManagerService.
 *
 * @param config
 * @returns
 */
export const DMGameManagerHelper = (
  config: DMConfigGameManagerService
): (() => Promise<any>) => {
  return () => {
    const service: DMGameManagerService = new DMGameManagerService();

    if (!config.mainClassGame)
      throw new Error("No hay instancias de DMGameManageAPI");

    // if (!(config.mainClassGame instanceof DMGameManageAPI))
    //   throw new Error("No hay instancias de DMGameManageAPI");

    return service.initialize({
      canvasConfig: config.canvasConfig,
      rendererHelper: config.rendererHelper,
      colliderHelper: config.colliderHelper,
      mainClassGame: config.mainClassGame,
    });
  };
};

/**
 * @deprecated use isValidInstance instead
 *
 * @param obj
 * @returns
 */
// const isValidInstance = (
//   obj: any
// ): obj is DMGameManageAPI &
//   DMRenderInterface &
//   DMRenderSettingsInterface &
//   DMColliderInterface => {
//   return (
//     // obj instanceof DMGameManageAPI &&
//     // typeof (obj as DMRenderInterface).render === "function" &&
//     // typeof (obj as DMRenderSettingsInterface).getRenderSettings === "function" &&
//     // typeof (obj as DMColliderInterface).getConfigCollision === "function" &&
//     // typeof (obj as DMColliderInterface).detectCollisions === "function"
//   );
// };
