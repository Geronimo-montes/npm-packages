import { ColaiderInterface, ListColaiderPoints } from "./colaider";
import { EDireccion } from "./ctrl.directive";
import { FootPoint } from "./footPoint";
import { Grid, GridDimensionValues } from "./grid";
import { ListRenderOptions, Render } from "./render";
import { Snake } from "./snake";

export interface GameModel {
  snake?: Snake;
  footPoint?: FootPoint;
  grid?: Grid;
}

export class Game implements Render, ColaiderInterface {
  constructor(
    public snake: Snake,
    public footPoint: FootPoint,
    public grid: Grid
  ) {}

  get dimensiones(): GridDimensionValues {
    return this.grid.dimensiones;
  }

  get pixelAncho(): number {
    return this.grid.pixelAncho;
  }

  setDirection(diretion: EDireccion): void {
    this.snake.setDirection(diretion);
  }

  detactar_colisiones(): ListColaiderPoints {
    return <ListColaiderPoints>[
      ...this.snake.detactar_colisiones(),
      ...this.footPoint.detactar_colisiones(),
    ];
  }

  render(): ListRenderOptions {
    return <ListRenderOptions>[
      ...this.snake.render(),
      ...this.footPoint.render(),
    ];
  }
}
