import { DMCanvasConfig } from "../models/dm-canvas-grid.interface";
import { DMListColliderPoints } from "../models/dm-colaider.interface";
import { DMGameManageAPI } from "../models/dm-game-manager.interface";
import { DMPoint } from "../models/dm-render.interface";

export function DmColaiderHelper(
  gameManage: DMGameManageAPI,
  canvasConfig: DMCanvasConfig
): DMListColliderPoints {
  const { heightCanvas, widthCanvas, heightGrid, widthGrid, pixel } =
    canvasConfig;

  const minX = 0,
    minY = 0,
    maxX = widthGrid,
    maxY = heightGrid;
  let colisiones: DMListColliderPoints = [];

  const items = gameManage.detectCollisions();
  for (let index = 0; index < items.length; index++) {
    const obj1 = items[index];

    // obj1.points.forEach((point: DMPoint) => {
    //   if (
    //     point.x < minX ||
    //     point.x > maxX ||
    //     point.y < minY ||
    //     point.y > maxY
    //   ) {
    //     let obj1Colision = colisiones.find((c) => Object.is(c, obj1));
    //     if (!obj1Colision) {
    //       colisiones.push({
    //         objectB: obj1,
    //         objectA: ,
    //         impactPoint: { x: point.x, y: point.y },
    //         impactTime: new Date().getTime(),
    //       });
    //     }
    //   }
    // });

    for (let _index2 = index + 1; _index2 < items.length; _index2++) {
      const obj2 = items[_index2];
      const point = obj1.points.find((point1, point1index) => {
        return obj2.points.find(
          (point2, point2index) =>
            (point1.x === point2.x && point1.y === point2.y) ||
            (point2.x === point1.x &&
              point2.y === point1.y &&
              point1index !== point2index)
        );
      });
      if (point) {
        colisiones.push({
          objectB: obj1,
          objectA: obj2,
          impactPoint: { x: point.x, y: point.y },
          impactTime: new Date().getTime(),
        });
      }
    }
  }

  return colisiones;
}
