import { DmColaiderHelper } from "../../helpers/dm-colaider.helper";
import { DMRenderHelper } from "../../helpers/dm-render.helper";
import { DMConfigGameManagerService } from "../../models/dm-game-manager.interface";
import { factoryGame } from "./brick-breaker.helper";

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
