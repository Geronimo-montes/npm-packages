import { Injectable } from "@angular/core";
import { DMConfigGameManager } from "../models/dm-game-manager.interface";

/**
 * Para inyectar la configuracion al servicio se debe idicar en el modulo.
 *
 * module.ts
 * ```
 *   providers: [
 *     GameManagerService,
 *     {
 *       provide: APP_INITIALIZER,
 *       deps: [GameManagerService],
 *       useFactory: inicializeGameManagerService,
 *       multi: true,
 *     },
 *   ],
 * ```
 */
@Injectable({
  providedIn: "root",
})
export class DMGameManagerService {
  constructor() {}

  /**
   * Metodo de inicializar el servicio.
   * El metodo se llama desde el component una vez cargado completamente.
   *
   * @param config
   * @returns
   */
  initialize(config: DMConfigGameManager): Promise<void> {
    return new Promise((resolver) => {
      this.config = config;
      console.log({ msj: "Current Config", config: this.config });
      resolver();
    });
  }

  /**
   * Configuracion actual para el servicio.
   */
  private config: any;
}
