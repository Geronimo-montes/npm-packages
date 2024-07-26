import { SnakeMainGameHelper } from "../games/snake/snake.model";
import { DmColaiderHelper } from "../helpers/dm-colaider.helper";
import { DMRenderHelper } from "../helpers/dm-render.helper";
import { DMConfigGameManagerService } from "./dm-game-manager.interface";

const pixel = 20;
const percent95Height = Math.floor(window.innerHeight * 0.8);
const percent95Width = Math.floor(window.innerWidth * 0.9);
const heightGrid = Math.floor(percent95Height / pixel);
const widthGrid = Math.floor(percent95Width / pixel);
const heightCanvas = heightGrid * pixel;
const widthCanvas = widthGrid * pixel;

// const heightCanvas = 600;
// const widthCanvas = 800;
// const pixel = 20;
// const heightGrid = heightCanvas / pixel;
// const widthGrid = widthCanvas / pixel;

export const DEFAULT_CONFIG: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    pixel,
    heightGrid,
    widthGrid,
    heightCanvas,
    widthCanvas,
  },
  mainClassGame: SnakeMainGameHelper,
};
