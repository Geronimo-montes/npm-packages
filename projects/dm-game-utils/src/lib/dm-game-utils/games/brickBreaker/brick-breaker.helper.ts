import { DMCanvasConfig } from "../../models/dm-canvas-grid.interface";
import { DMGameManageAPI } from "../../models/dm-game-manager.interface";
import { Game } from "./brick-breaker.model";

export const factoryGame = (canvasConfig: DMCanvasConfig): DMGameManageAPI => {
  // ... more code
  return new Game(canvasConfig);
};
