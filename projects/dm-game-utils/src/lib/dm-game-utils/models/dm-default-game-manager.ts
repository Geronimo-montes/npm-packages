import { SnakeMainGameHelper } from "../games/snake/snake.model";
import { DmColaiderHelper } from "../helpers/dm-colaider.helper";
import { DMRenderHelper } from "../helpers/dm-render.helper";
import { DMConfigGameManagerService } from "./dm-game-manager.interface";

const heightCanvas = 600;
const widthCanvas = 800;
const pixel = 20;
const heightGrid = heightCanvas / pixel;
const widthGrid = widthCanvas / pixel;

export const DEFAULT_CONFIG: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    heightCanvas,
    widthCanvas,
    pixel,
    heightGrid: heightGrid - 1,
    widthGrid: widthGrid - 1,
  },
  mainClassGame: SnakeMainGameHelper,
};
