/** @format */

import {
    CanvasContextNotAvailableError,
    GameManagerHelperNotAvailableError,
    InvalidCanvasContext2DElementError,
    InvalidCanvasElementError,
} from "../errors/dm-render.exception";
import { DMCanvasConfig } from "../models/dm-canvas-grid.interface";
import { DMGameManageAPI } from "../models/dm-game-manager.interface";
import {
    DMCanvasElementRef,
    DMObjRenderList,
    DMPoint,
} from "../models/dm-render.interface";

/**
 * Renders a list of objects onto a canvas element.
 *
 * @param {DMCanvasElementRef} canvas - The canvas element to render onto.
 * @param {DMObjRenderList} objectRenderList - The list of objects to render.
 */
export function DMRenderHelper(
  canvas: DMCanvasElementRef,
  gameManage: DMGameManageAPI,
  canvasConfig: DMCanvasConfig
): void {
  if (!gameManage) throw new GameManagerHelperNotAvailableError();

  if (!canvas) throw new InvalidCanvasElementError();

  if (canvas instanceof HTMLCanvasElement)
    throw new InvalidCanvasElementError();
  else if (!(canvas instanceof CanvasRenderingContext2D))
    throw new InvalidCanvasContext2DElementError();

  const ctx =
    canvas instanceof HTMLCanvasElement ? canvas.getContext("2d") : canvas;

  if (!ctx) {
    throw new CanvasContextNotAvailableError();
  }

  const { heightCanvas, widthCanvas, pixel } = canvasConfig;
  ctx.clearRect(0, 0, heightCanvas, widthCanvas);

  const drawPoint = (point: DMPoint, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(point.x * pixel, point.y * pixel, pixel, pixel);
  };

  gameManage.render().forEach(({ object, configRender }) => {
    const { color, points } = configRender;

    if (!color || !points) {
      return;
    }

    points.forEach((point) => {
      drawPoint(point, color);
    });
  });
}
