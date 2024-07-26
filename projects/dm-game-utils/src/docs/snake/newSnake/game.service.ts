import { Injectable } from "@angular/core";
import { interval, map, takeWhile, tap } from "rxjs";
import {
  ColaiderInterface,
  ColisionesResult,
  ListColaiderPoints,
  ctrlColisiones,
} from "./colaider";
import { CONSTANTES_SNAKE } from "./constants";
import { EDireccion, OnKeydownDown } from "./ctrl.directive";
import { FootPoint } from "./footPoint";
import { Game } from "./game";
import { Grid, GridDimensionValues } from "./grid";
import { ListRenderOptions, Render, render } from "./render";
import { Snake } from "./snake";

@Injectable({ providedIn: "root" })
export class GameSnakeService
  implements ColaiderInterface, OnKeydownDown, Render
{
  private game: Game = {} as Game;
  private loop = interval(100);

  constructor() {
    this.init();
  }

  private init() {
    const { dimension, pixel, initFoot, direction, speed, snake } =
      CONSTANTES_SNAKE;

    const _Snake = new Snake(snake, speed, direction);
    const _FootPoint = new FootPoint(initFoot);
    const _Grid = new Grid(dimension, pixel);
    this.game = new Game(_Snake, _FootPoint, _Grid);
  }

  start(canvas: any) {
    this.loop
      .pipe(
        tap(() => this.game.snake.avanzar()),
        map(() => ctrlColisiones(this.game)),
        tap(() => render(canvas, this.game)),
        takeWhile((colisiones) => this.validarColisiones(colisiones))
      )
      .subscribe(() => {});
  }

  private validarColisiones(colisiones: ColisionesResult[]): boolean {
    for (let index = 0; index < colisiones.length; index++) {
      const v = colisiones[index];

      if (v.name !== "snake") return true;

      if (v.colisiones.includes("foot")) {
        this.game.snake.comer(this.game.footPoint.getFootPoint());
        this.game.footPoint.newPoint(this.game.grid.dimensiones);
        return true;
      } else if (
        ["out-of-bounds", "snake"].some((value) => v.colisiones.includes(value))
      ) {
        return false;
      }
    }

    return true;
  }

  get dimensions(): GridDimensionValues {
    return this.game.dimensiones;
  }

  get pixel(): number {
    return this.game.grid.pixelAncho;
  }

  setDirection(diretion: EDireccion): void {
    return this.game.setDirection(diretion);
  }

  detactar_colisiones(): ListColaiderPoints {
    return this.game.detactar_colisiones();
  }

  render(): ListRenderOptions {
    return this.game.render();
  }
}
