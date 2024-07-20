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
  canvasConfig: DMCanvasConfig;
  barra: Barra;
  wall: Wall;

  constructor(canvasConfig: DMCanvasConfig) {
    this.canvasConfig = canvasConfig;
    this.barra = new Barra(canvasConfig);
    this.wall = new Wall(canvasConfig);
  }

  inputHandler(key: string): void {
    throw new Error("Method not implemented.");
  }
  setKey(key: string): void {
    if (key === KeyboardKey.ArrowLeft || key === KeyboardKey.ArrowRight) {
      this.barra.setDirection(key);
    }
  }
  loop(): void {
    this.barra.move();
  }
  render(): DMObjRenderList {
    return <DMObjRenderList>[
      { object: this.barra, configRender: this.barra.getRenderSettings() },
    ];
  }

  detectCollisions(): DMListObjects {
    return <DMListObjects>[
      { object: this.barra, points: this.barra.points },
      { object: this.wall, points: this.wall.points },
    ];
  }
  getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }
  validateCollisions(collisions: DMCollisionResult[]): boolean {
    for (let index = 0; index < collisions.length; index++) {}
    return true;
  }
}

const size =
  Math.floor((Math.min(window.innerHeight, window.innerWidth) * 0.8) / 100) *
  100;
const pixel = 10;

export const gameConfig: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    pixel,
    heightGrid: Math.floor(window.innerHeight * 0.95) / pixel,
    widthGrid: Math.floor(window.innerWidth * 0.95) / pixel,
    heightCanvas: Math.floor(window.innerHeight * 0.95),
    widthCanvas: Math.floor(window.innerWidth * 0.95),
  },
  mainClassGame: factoryGame,
};

export class Wall {
  constructor(canvasConfig: DMCanvasConfig) {
    this.points = [
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

  public points: DMPoint[] = [];
}

export class Barra {
  points: DMPoint[];
  direction: KeyboardKey.ArrowLeft | KeyboardKey.ArrowRight =
    KeyboardKey.ArrowLeft;

  canvasConfig: DMCanvasConfig;
  constructor({
    heightCanvas,
    heightGrid,
    pixel,
    widthCanvas,
    widthGrid,
  }: DMCanvasConfig) {
    this.canvasConfig = {
      heightCanvas,
      heightGrid,
      pixel,
      widthCanvas,
      widthGrid,
    };
    const medio = Math.floor(widthGrid / 2);
    this.points = [
      { x: medio - 2, y: heightGrid - 2 },
      { x: medio - 1, y: heightGrid - 2 },
      { x: medio, y: heightGrid - 2 },
      { x: medio + 1, y: heightGrid - 2 },
      { x: medio + 2, y: heightGrid - 2 },
    ];
  }

  getRenderSettings() {
    return {
      color: "Gray",
      points: this.points,
    };
  }

  move() {}

  public setDirection(
    direction: KeyboardKey.ArrowLeft | KeyboardKey.ArrowRight
  ) {
    this.direction = direction;
    if (KeyboardKey.ArrowLeft === direction) {
      if (this.points.every((p) => p.x > 0))
        this.points = this.points.map((v) => ({ x: v.x - 1, y: v.y }));
    } else {
      if (this.points.every((p) => p.x < this.canvasConfig.widthGrid - 1))
        this.points = this.points.map((v) => ({ x: v.x + 1, y: v.y }));
    }
  }
}

// TODO: Generate class of blocks point and add methods y properties.
// export class Bloques {
//   canvasConfig: DMCanvasConfig;

//   constructor(canvasConfig: DMCanvasConfig) {
//     this.canvasConfig = canvasConfig;
//   }
// }
