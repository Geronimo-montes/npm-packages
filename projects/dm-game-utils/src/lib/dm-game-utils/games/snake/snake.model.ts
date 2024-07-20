import { DMCanvasConfig } from "../../models/dm-canvas-grid.interface";
import {
  DMCollisionResult,
  DMConfigCollision,
  DMListObjects,
} from "../../models/dm-colaider.interface";
import { DMGameManageAPI } from "../../models/dm-game-manager.interface";
import { KeyboardKey } from "../../models/dm-key.interface";
import { DMObjRenderList, DMPoint } from "../../models/dm-render.interface";

export const SnakeMainGameHelper = (
  canvasConfig: DMCanvasConfig
): DMGameManageAPI => {
  return new SnakeMainGame(canvasConfig);
};

export class SnakeMainGame implements DMGameManageAPI {
  private snake: Snake = {} as Snake;
  private point: FootPoint = {} as FootPoint;

  constructor(canvasConfig: DMCanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.snake = new Snake();
    this.point = new FootPoint(this.canvasConfig);
  }

  private _canvasConfig: DMCanvasConfig = {} as DMCanvasConfig;
  public get canvasConfig(): DMCanvasConfig {
    return this._canvasConfig;
  }
  public set canvasConfig(value: DMCanvasConfig) {
    this._canvasConfig = value;
  }

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
      { object: this.point, configRender: this.point.getRenderSettings() },
    ];
  }

  detectCollisions(): DMListObjects {
    return <DMListObjects>[
      { object: this.snake, points: this.snake.points.slice(1) },
      { object: this.snake, points: [this.snake.points[0]] },
      { object: this.point, points: [this.point.getFootPoint()] },
    ];
  }
  getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }

  /**
   * Validates the detected collisions.
   *
   * @param collisions List of collision results.
   * @returns `true` if the collisions are valid, `false` otherwise.
   */
  public validateCollisions(collisions: DMCollisionResult[]): boolean {
    collisions.forEach((collision: DMCollisionResult) => {
      const { impactPoint, impactTime, objectA, objectB } = collision;
      if (
        (objectA.object instanceof Snake &&
          objectB.object instanceof FootPoint) ||
        (objectB.object instanceof Snake && objectA.object instanceof FootPoint)
      ) {
        this.snake.comer(impactPoint);
        this.point.newPoint(this.canvasConfig);
      }
    });

    return true;
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

export class FootPoint {
  constructor(canvasConfig: DMCanvasConfig) {
    this.newPoint(canvasConfig);
  }

  newPoint({ heightGrid, widthGrid }: DMCanvasConfig) {
    this.point = {
      x: Math.abs(Math.floor(Math.random() * heightGrid - 1)),
      y: Math.abs(Math.floor(Math.random() * widthGrid - 1)),
    };
  }

  getFootPoint(): DMPoint {
    return this.point;
  }

  getRenderSettings() {
    return {
      color: "yellow",
      points: [this.point],
    };
  }
  private point: DMPoint = {} as DMPoint;
}
