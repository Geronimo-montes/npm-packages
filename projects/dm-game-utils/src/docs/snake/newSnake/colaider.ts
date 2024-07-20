import { Point } from "./footPoint";
import { Game } from "./game";

export interface ColisionesResult {
  name: string;
  colisiones: string[];
}
export interface ColaiderInterface {
  detactar_colisiones(): ListColaiderPoints;
}

export type ColaiderPoints = { name: string; points: Point[] };
export type ListColaiderPoints = Array<ColaiderPoints>;

export const ctrlColisiones = (game: Game): ColisionesResult[] => {
  const { minX, maxX, minY, maxY } = game.dimensiones;
  let colisiones: ColisionesResult[] = [];

  game.detactar_colisiones().forEach((obj1, index, arr) => {
    // Validar límites para obj1
    obj1.points.forEach((point: Point) => {
      if (
        point.x < minX ||
        point.x > maxX ||
        point.y < minY ||
        point.y > maxY
      ) {
        let obj1Colision = colisiones.find((c) => c.name === obj1.name);
        if (!obj1Colision) {
          obj1Colision = { name: obj1.name, colisiones: [] };
          colisiones.push(obj1Colision);
        }
        if (!obj1Colision.colisiones.includes("out-of-bounds")) {
          obj1Colision.colisiones.push("out-of-bounds");
        }
      }
    });
    arr
      .filter((v) => v !== obj1)
      .forEach((obj2) => {
        const isColision = obj1.points.some((point1, point1index) => {
          return obj2.points.some(
            (point2, point2index) =>
              (point1.x === point2.x && point1.y === point2.y) ||
              (point2.x === point1.x &&
                point2.y === point1.y &&
                point1index !== point2index)
          );
        });

        if (isColision) {
          let obj1Colision = colisiones.find((c) => c.name === obj1.name);
          let obj2Colision = colisiones.find((c) => c.name === obj2.name);

          if (!obj1Colision) {
            obj1Colision = { name: obj1.name, colisiones: [] };
            colisiones.push(obj1Colision);
          }

          if (!obj2Colision) {
            obj2Colision = { name: obj2.name, colisiones: [] };
            colisiones.push(obj2Colision);
          }

          if (!obj1Colision.colisiones.includes(obj2.name)) {
            obj1Colision.colisiones.push(obj2.name);
          }

          if (!obj2Colision.colisiones.includes(obj1.name)) {
            obj2Colision.colisiones.push(obj1.name);
          }
        }
      });
  });

  return colisiones;
};
