import { ColaiderInterface, ListColaiderPoints } from "./colaider";
import { GridDimensionValues } from "./grid";
import { ListRenderOptions, Render } from "./render";

export interface Point {
  x: number;
  y: number;
}
export class FootPoint implements ColaiderInterface, Render {
  constructor(protected point: Point = { x: 0, y: 0 }) {}

  newPoint({ maxX, maxY }: GridDimensionValues) {
    this,
      (this.point = {
        x: Math.abs(Math.floor(Math.random() * maxX - 1)),
        y: Math.abs(Math.floor(Math.random() * maxY - 1)),
      });
  }

  getFootPoint(): Point {
    return this.point;
  }
  detactar_colisiones(): ListColaiderPoints {
    return <ListColaiderPoints>[{ name: "foot", points: [this.point] }];
  }

  render(): ListRenderOptions {
    return <ListRenderOptions>[{ color: "red", points: [this.point] }];
  }
}
