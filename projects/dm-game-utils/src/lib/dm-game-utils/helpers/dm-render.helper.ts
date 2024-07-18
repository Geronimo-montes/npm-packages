/** @format */

import { CanvasContextNotAvailableError, GlobalConfigRenderNotProvidedError, InvalidCanvasElementError, ObjectRenderListNotAvailableError } from "../errors/dm-render.exception";
import { DMGame } from "../models/dm-game.model";
import {
  DMCanvasElementRef,
  DMGlobalConfigRender,
  DMObjRenderList,
  DMPoint,
} from "../models/dm-render.model";

/**
 * Renders a list of objects onto a canvas element.
 *
 * @param {DMCanvasElementRef} canvas - The canvas element to render onto.
 * @param {DMObjRenderList} objectRenderList - The list of objects to render.
 */
export const dmRender = (
  canvas: DMCanvasElementRef,
  objectRenderList?: DMObjRenderList,
  globalConfigRender?: DMGlobalConfigRender,
  game?: DMGame
): void => {

  if (!canvas) {
    throw new InvalidCanvasElementError();
  }

  if (!globalConfigRender) {
    throw new GlobalConfigRenderNotProvidedError();
  }

  if (!(canvas instanceof HTMLCanvasElement)
    && !(canvas instanceof CanvasRenderingContext2D)) {
    throw new InvalidCanvasElementError();
  }

  const ctx = (canvas instanceof HTMLCanvasElement)
    ? canvas.getContext("2d")
    : canvas

  if (!ctx) {
    throw new CanvasContextNotAvailableError();
  }

  if (!objectRenderList) {
    throw new ObjectRenderListNotAvailableError();
  }

  /**
   * Draws a point on the canvas with the specified color.
   *
   * @param {DMPoint} point - The point to draw on the canvas.
   * @param {string} color - The color of the point.
   */
  const drawPoint = (point: DMPoint, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(
      point.x * globalConfigRender.pixel,
      point.y * globalConfigRender.pixel,
      globalConfigRender.pixel,
      globalConfigRender.pixel
    );
  };

  objectRenderList.forEach(({ object, configRender }) => {
    const { color, points } = configRender;
    if (!color || !points) return;
    points.forEach((point) => {
      drawPoint(point, color);
    });
  });
};
