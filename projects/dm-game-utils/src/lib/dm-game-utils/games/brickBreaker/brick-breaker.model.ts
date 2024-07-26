import { DMCanvasConfig } from "../../models/dm-canvas-grid.interface";
import { KeyboardKey } from "../../models/dm-key.interface";
import {
  DMCollisionResult,
  DMConfigCollision,
  DMConfigGameManagerService,
  DMGameManageAPI,
  DMListObjects,
  DMObjRenderList,
  DMPoint,
  DMRenderHelper,
  DmColaiderHelper,
} from "../../../../public-api";
import { BlokSize } from "./brick-breaker.interface";
import { calcInitStateBloques } from "./blocks.helper";

/**
 *
 */
export class Game implements DMGameManageAPI {
  canvasConfig: DMCanvasConfig;
  barra: Barra;
  wall: WallGame;
  blocks: Block[] = [];
  pelota: Pelota;

  constructor(canvasConfig: DMCanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.barra = new Barra(canvasConfig);
    const { x, y } = this.barra.points[1];
    this.pelota = new Pelota(canvasConfig, { x, y: y - 1 });
    this.wall = new WallGame(canvasConfig);
    this.blocks = calcInitStateBloques(canvasConfig);
  }

  public getMarcador(): number {
    return 0;
  }

  public inputHandler(key: string): void {
    throw new Error("Method not implemented.");
  }

  public setKey(key: string): void {
    switch (key) {
      case KeyboardKey.ArrowLeft:
      case KeyboardKey.ArrowRight:
        this.barra.setDirection(key);
        if (this.barra.hasPelota) {
          this.pelota.setDirection(key);
        }
        break;
      case KeyboardKey.Space:
        // soltar pelota
        if (this.pelota.isRuning) break;

        this.barra.hasPelota = false;
        this.pelota.isRuning = true;
        this.pelota.avanzar();
        break;
      default:
        break;
    }
  }

  public loop(): void {
    this.pelota.avanzar();
  }

  public render(): DMObjRenderList {
    return <DMObjRenderList>[
      { object: this.pelota, configRender: this.pelota.getRenderSettings() },
      { object: this.barra, configRender: this.barra.getRenderSettings() },
      ...this.blocks.map((object) => ({
        object,
        configRender: object.getRenderSettings(),
      })),
    ];
  }

  public detectCollisions(): DMListObjects {
    return <DMListObjects>[
      { object: this.pelota, points: this.pelota.points },
      { object: this.barra, points: this.barra.points },
      { object: this.wall, points: this.wall.points },
      ...this.blocks.map((v) => ({ object: v, points: v.points })),
    ];
  }

  public getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }

  public validateCollisions(collisions: DMCollisionResult[]): boolean {
    // console.log({ collisions });
    collisions.forEach(
      ({ objectA, objectB, impactPoint }: DMCollisionResult) => {
        if (
          (objectA.object instanceof Pelota &&
            objectB.object instanceof WallGame) ||
          (objectB.object instanceof Pelota &&
            objectA.object instanceof WallGame)
        ) {
          if (impactPoint.y === this.canvasConfig.heightGrid) {
            alert("Game over");
          }
          this.pelota.rebotarEnPared();
        }

        if (
          (objectA.object instanceof Pelota &&
            objectB.object instanceof Barra) ||
          (objectB.object instanceof Pelota && objectA.object instanceof Barra)
        ) {
          // this.pelota.rebotarEnPared();
          this.pelota.deltas.dy = -this.pelota.deltas.dy;
        }

        if (
          (objectA.object instanceof Pelota &&
            objectB.object instanceof Block) ||
          (objectB.object instanceof Pelota && objectA.object instanceof Block)
        ) {
          // this.pelota.rebotarEnPared();
          this.pelota.deltas.dy = -this.pelota.deltas.dy;
          const blok =
            objectA.object instanceof Block ? objectA.object : objectB.object;
          this.blocks = this.blocks.filter((v) => v !== blok);
        }
      }
    );
    return true;
  }
}

/**
 *
 */
export class WallGame {
  private _points: DMPoint[] = [];

  public constructor(canvasConfig: DMCanvasConfig) {
    this._points = [
      ...Array.from({ length: canvasConfig.widthGrid }, (_, i) => [
        <DMPoint>{ x: i, y: 0 },
        <DMPoint>{ x: i, y: canvasConfig.heightGrid },
      ]).flat(1),
      ...Array.from({ length: canvasConfig.heightGrid }, (_, i) => [
        <DMPoint>{ x: 0, y: i },
        <DMPoint>{ x: canvasConfig.widthGrid, y: i },
      ]).flat(1),
    ];
  }

  get points(): DMPoint[] {
    return this._points;
  }

  public getRenderSettings() {
    return {
      color: "grown",
      points: this._points,
    };
  }
}

/**
 *
 */
export class Barra {
  private canvasConfig: DMCanvasConfig;
  private _points: DMPoint[];
  private _speed: number = 2;
  public hasPelota: boolean = true;

  public constructor(canvasConfig: DMCanvasConfig) {
    this.canvasConfig = canvasConfig;

    const medio = Math.floor(canvasConfig.widthGrid / 2);
    this._points = [
      { x: medio - 2, y: canvasConfig.heightGrid - 2 },
      { x: medio - 1, y: canvasConfig.heightGrid - 2 },
      { x: medio, y: canvasConfig.heightGrid - 2 },
      { x: medio + 1, y: canvasConfig.heightGrid - 2 },
      { x: medio + 2, y: canvasConfig.heightGrid - 2 },
    ];
  }

  public get points(): DMPoint[] {
    return this._points;
  }

  public getRenderSettings() {
    return {
      color: "Gray",
      points: this._points,
    };
  }

  public setDirection(
    direction: KeyboardKey.ArrowLeft | KeyboardKey.ArrowRight
  ) {
    if (KeyboardKey.ArrowLeft === direction) {
      if (this._points.every((p) => p.x > 0))
        this._points = this._points.map((v) => ({
          x: v.x - this._speed,
          y: v.y,
        }));
    } else {
      if (this._points.every((p) => p.x < this.canvasConfig.widthGrid - 1))
        this._points = this._points.map((v) => ({
          x: v.x + this._speed,
          y: v.y,
        }));
    }
  }
}

/**
 *
 */
export class Block {
  private canvasConfig: DMCanvasConfig;
  private _points: DMPoint[] = [];
  private size: BlokSize = { height: 1, width: 1 };

  constructor(canvasConfig: DMCanvasConfig, { x, y }: DMPoint) {
    this.canvasConfig = canvasConfig;
    for (let wx = 0; wx < this.size.width; wx++) {
      for (let hy = 0; hy < this.size.height; hy++) {
        this.points.push({ x: x + wx, y: y + hy });
      }
    }
  }

  public getRenderSettings() {
    return {
      color: "yellow",
      points: this.points,
    };
  }

  public get points(): DMPoint[] {
    return this._points;
  }
}

/**
 *
 */
export class Pelota {
  private canvasConfig: DMCanvasConfig;
  private _point!: DMPoint;
  public isRuning: boolean = false;
  public deltas = { dx: 1, dy: -1 };

  constructor(canvasConfig: DMCanvasConfig, { x, y }: DMPoint) {
    this.canvasConfig = canvasConfig;
    this._point = { x, y };
  }

  public getRenderSettings() {
    return {
      color: "red",
      points: this.points,
    };
  }

  public get points(): DMPoint[] {
    return [this._point];
  }

  public avanzar() {
    if (!this.isRuning) return;

    this._point = {
      x: this._point.x + this.deltas.dx,
      y: this._point.y + this.deltas.dy,
    };

    console.log({ ...this._point });
  }

  public rebotarEnPared() {
    const { x, y } = this.points[0];
    const { dx, dy } = this.deltas;

    console.log(`Position before: (${x}, ${y}), Deltas: (${dx}, ${dy})`);

    // Verificar colisión con las paredes laterales (izquierda y derecha)
    if (x + dx >= this.canvasConfig.widthGrid || x + dx <= 0) {
      this.deltas.dx = -dx;
      console.log(`Rebotó en la pared lateral. Nuevo dx: ${this.deltas.dx}`);
    }

    // Verificar colisión con las paredes superior e inferior
    if (y + dy >= this.canvasConfig.heightGrid || y + dy <= 0) {
      this.deltas.dy = -dy;
      console.log(
        `Rebotó en la pared superior/inferior. Nuevo dy: ${this.deltas.dy}`
      );
    }

    console.log(
      `Position after: (${x + this.deltas.dx}, ${y + this.deltas.dy})`
    );
  }

  public setDirection(
    direction: KeyboardKey.ArrowLeft | KeyboardKey.ArrowRight
  ) {
    if (KeyboardKey.ArrowLeft === direction) {
      this._point = { x: this._point.x - 1, y: this._point.y };
    } else {
      this._point = { x: this._point.x + 1, y: this._point.y };
    }
  }
}
