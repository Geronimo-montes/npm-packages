import { dmRender } from "../helpers/dm-render.helper";

export type DMCanvasElementRef =
  | HTMLCanvasElement
  | CanvasRenderingContext2D
  | undefined;

export interface DMPoint {
  x: number;
  y: number;
}
export interface DMGlobalConfigRender {
  pixel: number;
  skinDefault?: string;
  colorDefault?: string;
  render?: DMRenderFunc; // Render function custom, if not exists, use the default one

}

export interface DMConfigRender {
  color: string;
  points: DMPoint[];
  skin?: string;
};

export interface DMObjRender {
  object: any;
  configRender: DMConfigRender;
}

export type DMObjRenderList = Array<DMObjRender> | [] | undefined;

export type DMRenderFunc = typeof dmRender;
