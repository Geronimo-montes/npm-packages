import { DMCanvasConfig } from "../../models/dm-canvas-grid.interface";
import { Block } from "./brick-breaker.model";

export const calcInitStateBloques = (canvasConfig: DMCanvasConfig) => {
  const restWidth = canvasConfig.widthGrid * 0.95;
  const countBlockWidth = Math.floor(restWidth / 2);

  const restHeight = canvasConfig.heightGrid * 0.6;
  const countBlockHeight = Math.floor(restHeight / 2);

  const points: Block[] = [];
  for (let iWidth = 1; iWidth <= countBlockWidth; iWidth++) {
    for (let iHeight = 1; iHeight < countBlockHeight; iHeight++) {
      points.push(
        new Block(canvasConfig, { x: iWidth * 2 - 1, y: iHeight * 2 })
      );
    }
  }

  return points;
};
