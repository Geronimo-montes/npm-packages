import { Point } from "./footPoint";
import { Render, RenderOptions } from "./render";

export interface GridDimensionValues {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export class Grid implements Render {
  originPoint: Point = { x: 0, y: 0 };
  maxPoint: Point = { x: 0, y: 0 };

  constructor(private dimension: number, private pixel: number = 15) {
    this.maxPoint.x = this.maxPoint.y = dimension;
  }
  get dimensiones(): GridDimensionValues {
    return {
      minX: this.originPoint.x,
      maxX: this.maxPoint.x,
      minY: this.originPoint.y,
      maxY: this.maxPoint.y,
    };
  }

  get pixelAncho(): number {
    return this.pixel;
  }
  render(): RenderOptions[] {
    return [];
  }
}
