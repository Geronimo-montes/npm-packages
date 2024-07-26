import { keyframes } from "@angular/animations";
import { DMCanvasConfig } from "../../../dm-game-utils/src/lib/dm-game-utils/models/dm-canvas-grid.interface";
import { KeyboardKey } from "../../../dm-game-utils/src/lib/dm-game-utils/models/dm-key.interface";
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
} from "../../../dm-game-utils/src/public-api";

export const factoryGame = (canvasConfig: DMCanvasConfig): DMGameManageAPI => {
  // ... more code
  return new Game(canvasConfig);
};

export class Game implements DMGameManageAPI {
  getName(): string {
    return "Game";
  }
  canvasConfig: DMCanvasConfig;
  barra: Barra;
  wall: WallGame;
  blocks: Block[] = [];
  pelota: Pelota;

  constructor(canvasConfig: DMCanvasConfig) {
    this.canvasConfig = canvasConfig;
    const pointsBarra = fatoryPointsBarra(canvasConfig);
    const { x, y } = pointsBarra[1];
    this.barra = new Barra(canvasConfig, pointsBarra);
    this.wall = new WallGame(canvasConfig);
    this.blocks = calcInitStateBloques(canvasConfig);
    // this.blocks = [new Block(canvasConfig, { x: 18, y: 20 })];
    this.pelota = new Pelota(canvasConfig, { x, y: y - 1 });
  }

  getMarcador(): number {
    return 0;
  }

  inputHandler(key: string): void {
    throw new Error("Method not implemented.");
  }

  setKey(key: string): void {
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

  loop(): void {
    this.pelota.avanzar();
  }

  render(): DMObjRenderList {
    return <DMObjRenderList>[
      { object: this.pelota, configRender: this.pelota.getRenderSettings() },
      { object: this.barra, configRender: this.barra.getRenderSettings() },
      ...this.blocks.map((object) => ({
        object,
        configRender: object.getRenderSettings(),
      })),
    ];
  }

  detectCollisions(): DMListObjects {
    return <DMListObjects>[
      { object: this.pelota, points: this.pelota.points },
      { object: this.barra, points: this.barra.points },
      { object: this.wall, points: this.wall.points },
    ];
  }

  getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }

  validateCollisions(collisions: DMCollisionResult[]): boolean {
    // console.log({ collisions });
    collisions.forEach(({ objectA, objectB }: DMCollisionResult) => {
      if (
        (objectA.object instanceof Pelota &&
          objectB.object instanceof WallGame) ||
        (objectB.object instanceof Pelota && objectA.object instanceof WallGame)
      ) {
        console.log({ c: "collisions" });
        this.pelota.rebotarEnPared();
      }
    });
    return true;
  }
}

const pixel = 20;
const percent95Height = Math.floor(window.innerHeight * 0.8);
const percent95Width = Math.floor(window.innerWidth * 0.9);
const heightGrid = Math.floor(percent95Height / pixel);
const widthGrid = Math.floor(percent95Width / pixel);
const heightCanvas = heightGrid * pixel;
const widthCanvas = widthGrid * pixel;

export const gameConfig: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    pixel,
    heightGrid,
    widthGrid,
    heightCanvas,
    widthCanvas,
  },
  mainClassGame: factoryGame,
};

export class WallGame {
  getName(): string {
    return "WallGame";
  }
  private _points: DMPoint[] = [];

  public constructor(canvasConfig: DMCanvasConfig) {
    this._points = [
      ...Array.from({ length: canvasConfig.widthGrid }, (_, i) => [
        <DMPoint>{ x: (i = 1), y: 0 },
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

const fatoryPointsBarra = (canvasConfig: DMCanvasConfig) => {
  const medio = Math.floor(canvasConfig.widthGrid / 2);
  return [
    { x: medio - 2, y: canvasConfig.heightGrid - 2 },
    { x: medio - 1, y: canvasConfig.heightGrid - 2 },
    { x: medio, y: canvasConfig.heightGrid - 2 },
    { x: medio + 1, y: canvasConfig.heightGrid - 2 },
    { x: medio + 2, y: canvasConfig.heightGrid - 2 },
  ];
};

export class Barra {
  getName(): string {
    return "Barra";
  }
  private canvasConfig: DMCanvasConfig;
  private _points: DMPoint[];
  public hasPelota: boolean = true;

  public constructor(canvasConfig: DMCanvasConfig, pointsBarra: DMPoint[]) {
    this.canvasConfig = canvasConfig;
    this._points = pointsBarra;
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
        this._points = this._points.map((v) => ({ x: v.x - 1, y: v.y }));
    } else {
      if (this._points.every((p) => p.x < this.canvasConfig.widthGrid - 1))
        this._points = this._points.map((v) => ({ x: v.x + 1, y: v.y }));
    }
  }
}

export interface BlokSize {
  height: number;
  width: number;
}

const calcInitStateBloques = (canvasConfig: DMCanvasConfig) => {
  const restWidth = canvasConfig.widthGrid * 0.9;
  const countBlockWidth = Math.floor(restWidth / 4);

  const restHeight = canvasConfig.heightGrid * 0.6;
  const countBlockHeight = Math.floor(restHeight / 3);

  const points: Block[] = [];
  for (let iWidth = 1; iWidth <= countBlockWidth; iWidth++) {
    for (let iHeight = 1; iHeight < countBlockHeight; iHeight++) {
      points.push(
        new Block(canvasConfig, { x: iWidth * 4 - 1, y: iHeight * 3 })
      );

    }
  }

  return points;
};

// TODO: Generate class of blocks point and add methods y properties.
export class Block {
  getName(): string {
    return "Block";
  }
  private canvasConfig: DMCanvasConfig;
  private _points: DMPoint[] = [];
  private size: BlokSize = { height: 2, width: 3 };

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

export class Pelota {
  getName(): string {
    return "Pelota";
  }
  private canvasConfig: DMCanvasConfig;
  private _point!: DMPoint;
  public isRuning: boolean = false;
  public deltas = { dx: -1, dy: 1 };

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

  avanzar() {
    if (!this.isRuning) return;

    this._point = {
      x: this._point.x + this.deltas.dx,
      y: this._point.y + this.deltas.dy,
    };

    console.log({ point: this._point });
  }

  rebotarEnPared() {
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
