import { DMCanvasConfig } from "./dm-canvas-grid.interface";
import {
  DMColliderInterface,
  DMConfigCollision,
  DMListObjects,
} from "./dm-colaider.interface";
import { DMGameManageAPI } from "./dm-game-manager.interface";
import {
  DMObjRenderList,
  DMRenderInterface,
  DMRenderSettingsInterface,
} from "./dm-render.interface";

/**
 * @deprecated use DMGameManageAPI instead
 */
export default class DmGameManager
  implements DMRenderSettingsInterface, DMRenderInterface, DMColliderInterface
{
  constructor(
    gameLogicIntancesList: DMGameManageAPI,
    renderSettings: DMCanvasConfig
  ) {
    this.gameLogicInstances = gameLogicIntancesList;
    this.renderSettings = renderSettings;
  }

  public detectCollisions(): DMListObjects {
    return this.gameLogicInstances.detectCollisions();
    //   .map((value) => (<DMColliderInterface>value).detectCollisions())
    //   .flat(1);
  }

  public getConfigCollision(): DMConfigCollision {
    return {
      minX: 0,
      maxX: this.renderSettings.widthGrid,
      minY: 0,
      maxY: this.renderSettings.heightGrid,
    };
  }

  public render(): DMObjRenderList {
    return this.gameLogicInstances.render();
    //   .map((value) => (<DMRenderInterface>value).render())
    //   .flat(1);
  }

  public getRenderSettings(): DMCanvasConfig {
    return this.renderSettings;
  }

  public loop() {
    return this.gameLogicInstances.loop();
    // .forEach((value) =>
    //   (<DmGameManagerInterface>value).loop()
    // );
  }
  public senKey(key: string) {
    this.gameLogicInstances.setKey(key);
    // .forEach((value) =>
    //   (<DmGameManagerInterface>value).setKey(key)
    // );
  }

  private gameLogicInstances: DMGameManageAPI;
  private renderSettings: DMCanvasConfig;
}
