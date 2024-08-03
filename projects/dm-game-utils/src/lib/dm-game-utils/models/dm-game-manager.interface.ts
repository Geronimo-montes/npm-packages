import { InjectionToken } from "@angular/core";
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
  getMarcador(): number;
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

type factoryGameLogic = (canvasConfig: DMCanvasConfig) => DMGameManageAPI;

export interface GameHelperItem {
  name: string;
  value: factoryGameLogic;
}

export interface DMConfigGameManagerService {
  rendererHelper: DMRenderFunc;
  colliderHelper: DMColliderFunc;
  canvasConfig: DMCanvasConfig;
  mainClassGame: factoryGameLogic;
  gameHemperList: Array<GameHelperItem>;
}

export const CONFIG_TOKEN: InjectionToken<DMConfigGameManagerService> =
  new InjectionToken<DMConfigGameManagerService>("CONFIG_TOKEN");
