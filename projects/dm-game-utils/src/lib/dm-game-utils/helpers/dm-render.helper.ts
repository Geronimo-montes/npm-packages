/** @format */

import {
  CanvasContextNotAvailableError,
  GameManagerHelperNotAvailableError,
  InvalidCanvasContext2DElementError,
  InvalidCanvasElementError,
} from "../errors/dm-render.exception";
import DmGameManager from "../models/dm-game-manager.model";
import {
  DMCanvasElementRef,
  DMObjRenderList,
  DMPoint,
  DMRenderFunc,
} from "../models/dm-render.interface";

/**
 * Renders a list of objects onto a canvas element.
 *
 * @param {DMCanvasElementRef} canvas - The canvas element to render onto.
 * @param {DMObjRenderList} objectRenderList - The list of objects to render.
 */
export const DMRenderHelper: DMRenderFunc = (
  canvas: DMCanvasElementRef,
  gameManage: DmGameManager
): void => {
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

  const { heightGrid, widthGrid, pixel } = gameManage.getRenderSettings();

  ctx.clearRect(0, 0, widthGrid, heightGrid);

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
};
