import { InjectionToken } from "@angular/core";
import { SnakeMainGame, SnakeMainGameHelper } from "../games/snake/snake.model";
import { DmColaiderHelper } from "../helpers/dm-colaider.helper";
import { DMRenderHelper } from "../helpers/dm-render.helper";
import { DMCanvasConfig } from "./dm-canvas-grid.interface";
import {
  DMColliderFunc,
  DMCollisionResult,
  DMConfigCollision,
  DMListObjects,
} from "./dm-colaider.interface";
import { DMObjRenderList, DMRenderFunc } from "./dm-render.interface";
/**
 * Interfaz DMGameLogic
 *
 * Esta interfaz define la estructura necesaria para la lógica del juego.
 * Proporciona métodos para manejar entradas, ejecutar bucles de juego,
 * renderizar objetos y detectar colisiones.
 */
export interface DMGameManageAPI {
  /**
   * Maneja la entrada del usuario.
   *
   * @param key - La tecla presionada por el usuario.
   */
  inputHandler(key: string): void;

  /**
   * Establece una tecla específica.
   *
   * @param key - La tecla a ser establecida.
   */
  setKey(key: string): void;

  /**
   * Ejecuta el bucle principal del juego.
   */
  loop(): void;

  /**
   * Renderiza la lista de objetos del juego.
   *
   * @returns {DMObjRenderList} - Una lista de objetos para renderizar.
   */
  render(): DMObjRenderList;

  /**
   * Detecta colisiones entre objetos en el juego.
   *
   * @returns {DMListObjects} - Una lista de objetos que han colisionado.
   */
  detectCollisions(): DMListObjects;

  /**
   * Obtiene la configuración de colisiones.
   *
   * @returns {DMConfigCollision} - La configuración de colisiones.
   */
  getConfigCollision(): DMConfigCollision;
  validateCollisions(collisions: DMCollisionResult[]): boolean;
}

// export class DMGameManagerAPI implements DMGameManageInterface {
//   public inputHandler(key: string): void {
//     throw new Error("Method not implemented.");
//   }
//   public setKey(key: string): void {
//     throw new Error("Method not implemented.");
//   }
//   public loop(): void {
//     throw new Error("Method not implemented.");
//   }
//   public render(): DMObjRenderList {
//     throw new Error("Method not implemented.");
//   }
//   public detectCollisions(): DMListObjects {
//     throw new Error("Method not implemented.");
//   }
//   public getConfigCollision(): DMConfigCollision {
//     throw new Error("Method not implemented.");
//   }
// }

export interface DMConfigGameManagerService {
  rendererHelper: DMRenderFunc;
  colliderHelper: DMColliderFunc;
  canvasConfig: DMCanvasConfig;
  mainClassGame: (canvasConfig: DMCanvasConfig) => DMGameManageAPI;
}

export const DEFAULT_CONFIG: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    heightCanvas: 600,
    widthCanvas: 800,
    heightGrid: 50,
    widthGrid: 50,
    pixel: 10,
  },
  mainClassGame: SnakeMainGameHelper,
};

export const CONFIG_TOKEN: InjectionToken<DMConfigGameManagerService> =
  new InjectionToken<DMConfigGameManagerService>("CONFIG_TOKEN");
