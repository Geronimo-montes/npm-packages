import DmGameManager from "./dm-game-manager.model";

/**
 * Type representing a reference to a canvas element or a canvas rendering context.
 */
export type DMCanvasElementRef =
  | HTMLCanvasElement
  | CanvasRenderingContext2D
  | undefined;

/**
 * Interface representing a point on the canvas.
 */
export interface DMPoint {
  x: number;
  y: number;
}

/**
 * Interface representing the global configuration for rendering on the canvas.
 */
export interface DMGlobalConfigRender {
  pixel: number;
  heightGrid: number;
  widthGrid: number;
  canvasSize: number;
  // skinDefault?: string;
  // colorDefault?: string;
  // render?: DMRenderFunc; // Render function custom, if not exists, use the default one
}

/**
 * Interface representing the configuration for rendering a specific object on the canvas.
 */
export interface DMConfigRender {
  color: string;
  points: DMPoint[];
  // skin?: string;
}

/**
 * Interface representing the rendering data for a specific object on the canvas.
 */
export interface DMObjRender {
  object: any;
  configRender: DMConfigRender;
}

/**
 * Type representing a list of objects to render on the canvas.
 */
export type DMObjRenderList = Array<DMObjRender> | [];

/**
 * Interfaz Render, invocada para obtener la lista de objertos a renderizar y sus configuraciones.
 */
export interface DMRenderInterface {
  render(): DMObjRenderList;
}

/**
 * Interfaz de RenderHelper para obtener la configuracion del Grid.
 * Se implementa unicamente en la el GameManager
 */
export interface DMRenderSettingsInterface {
  getRenderSettings(): DMGlobalConfigRender;
}

const renderAbs = (
  canvas: DMCanvasElementRef,
  gameManager: DmGameManager
): DMObjRenderList => {
  return [];
};

/**
 * Function responsible for rendering the game objects on the canvas.
 *
 * @param {DMCanvasElementRef} canvas - The canvas element to render onto.
 * @param {DmGameManager} SgameManager - The game manager helper.
 */
export type DMRenderFunc = typeof renderAbs;
