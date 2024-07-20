import { DMEDireccion } from "../../../lib/dm-game-utils/models/dm-key.interface";
import { ColaiderInterface, ListColaiderPoints } from "./colaider";
import { OnKeydownDown } from "./ctrl.directive";
import { Point } from "./footPoint";
import { ListRenderOptions, Render } from "./render";

export interface SnakeModel {
  points: Point[];
  direction: DMEDireccion;
  speed: number;
}

export class Snake
  implements SnakeModel, ColaiderInterface, OnKeydownDown, Render
{
  constructor(
    protected _points: Point[],
    protected _speed: number,
    protected _direction: DMEDireccion
  ) {}

  // metods publics
  public avanzar() {
    const { x, y } = this._points[0];
    switch (this._direction) {
      case DMEDireccion.UP:
        this._points.unshift({ x, y: y - 1 * this._speed });
        this._points.pop();
        break;
      case DMEDireccion.DOWN:
        this._points.unshift({ x, y: y + 1 * this._speed });
        this._points.pop();
        break;
      case DMEDireccion.LEFT:
        this._points.unshift({ x: x - 1 * this._speed, y });
        this._points.pop();
        break;
      case DMEDireccion.RIGHT:
        this._points.unshift({ x: x + 1 * this._speed, y });
        this._points.pop();
        break;
    }
  }

  public setDirection(direction: DMEDireccion) {
    if (
      this._direction === DMEDireccion.UP &&
      direction !== DMEDireccion.DOWN
    ) {
      this._direction = direction;
    } else if (
      this._direction === DMEDireccion.DOWN &&
      direction !== DMEDireccion.UP
    ) {
      this._direction = direction;
    } else if (
      this._direction === DMEDireccion.LEFT &&
      direction !== DMEDireccion.RIGHT
    ) {
      this._direction = direction;
    } else if (
      this._direction === DMEDireccion.RIGHT &&
      direction !== DMEDireccion.LEFT
    ) {
      this._direction = direction;
    }
  }

  public comer(point: Point) {
    this._points.push(point);
  }

  // get/set
  get points(): Point[] {
    return this._points;
  }

  get direction(): DMEDireccion {
    return this._direction;
  }

  get speed(): number {
    return this._speed;
  }

  // override
  detactar_colisiones(): ListColaiderPoints {
    return <ListColaiderPoints>[
      { name: "snake", points: this._points.slice(1) },
      { name: "snake", points: [this._points[0]] },
    ];
  }

  render(): ListRenderOptions {
    return <ListRenderOptions>[{ color: "blue", points: this.points }];
  }
}
