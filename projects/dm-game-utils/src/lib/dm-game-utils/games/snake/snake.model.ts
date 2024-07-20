import {
  DMConfigCollision,
  DMListObjects,
} from "../../models/dm-colaider.interface";
import { DMGameManageAPI } from "../../models/dm-game-manager.interface";
import { KeyboardKey } from "../../models/dm-key.interface";
import { DMObjRenderList, DMPoint } from "../../models/dm-render.interface";

export class SnakeMainGame implements DMGameManageAPI {
  private snake: Snake = new Snake();
  constructor() {}

  inputHandler(key: string): void {}

  setKey(key: string): void {
    if (
      key === KeyboardKey.ArrowDown ||
      key === KeyboardKey.ArrowLeft ||
      key === KeyboardKey.ArrowRight ||
      key === KeyboardKey.ArrowUp
    )
      this.snake.setDirection(key);
  }

  loop(): void {
    this.snake.avanzar();
  }
  render(): DMObjRenderList {
    return <DMObjRenderList>[
      { object: this.snake, configRender: this.snake.getRenderSettings() },
    ];
  }
  detectCollisions(): DMListObjects {
    return <DMListObjects>[
      { object: this, points: this.snake.points.slice(1) },
      { object: this, points: [this.snake.points[0]] },
    ];
  }
  getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }
}

export interface SnakeModel {
  points: DMPoint[];
  direction: KeyboardKey;
  speed: number;
}

export class Snake {
  constructor(
    protected _points: DMPoint[] = [
      { x: 10, y: 15 },
      { x: 10, y: 14 },
      { x: 10, y: 13 },
      { x: 10, y: 12 },
      { x: 10, y: 11 },
      { x: 10, y: 10 },
    ],
    protected _speed: number = 1,
    protected _direction: KeyboardKey = KeyboardKey.ArrowDown
  ) {}

  getRenderSettings() {
    return {
      color: "blue",
      points: this._points,
    };
  }

  // metods publics
  public avanzar() {
    const { x, y } = this._points[0];
    switch (this._direction) {
      case KeyboardKey.ArrowUp:
        this._points.unshift({ x, y: y - 1 * this._speed });
        this._points.pop();
        break;
      case KeyboardKey.ArrowDown:
        this._points.unshift({ x, y: y + 1 * this._speed });
        this._points.pop();
        break;
      case KeyboardKey.ArrowLeft:
        this._points.unshift({ x: x - 1 * this._speed, y });
        this._points.pop();
        break;
      case KeyboardKey.ArrowRight:
        this._points.unshift({ x: x + 1 * this._speed, y });
        this._points.pop();
        break;
    }
  }

  public setDirection(direction: KeyboardKey) {
    if (
      this._direction === KeyboardKey.ArrowUp &&
      direction !== KeyboardKey.ArrowDown
    ) {
      this._direction = direction;
    } else if (
      this._direction === KeyboardKey.ArrowDown &&
      direction !== KeyboardKey.ArrowUp
    ) {
      this._direction = direction;
    } else if (
      this._direction === KeyboardKey.ArrowLeft &&
      direction !== KeyboardKey.ArrowRight
    ) {
      this._direction = direction;
    } else if (
      this._direction === KeyboardKey.ArrowRight &&
      direction !== KeyboardKey.ArrowLeft
    ) {
      this._direction = direction;
    }
  }

  public comer(point: DMPoint) {
    this._points.push(point);
  }

  // get/set
  get points(): DMPoint[] {
    return this._points;
  }

  get direction(): KeyboardKey {
    return this._direction;
  }

  get speed(): number {
    return this._speed;
  }

  // override
}
