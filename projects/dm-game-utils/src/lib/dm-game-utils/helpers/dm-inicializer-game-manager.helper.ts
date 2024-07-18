import { DMConfigGameManager } from "../models/dm-config-game-manager.model";
import { DMGameManagerService } from "../services/dm-game-manager.service";

/**
 * Funcion inicializadora para el servicio DMGameManagerService.
 *
 * @param gameManagerService
 * @returns
 */
export const dmInicializerGameManager = (
  gameManagerService: DMGameManagerService
): (() => Promise<void>) => {
  return () => {
    const config: DMConfigGameManager = {
      render: function (): void {
        throw new Error("Function not implemented.");
      },
      skin: {},
      gameBase: {},
      serviceClass: new DMGameManagerService(),
      renderer: {},
      collider: {},
      classGame: {},
    };
    return gameManagerService.initialize(config);
  };
};
