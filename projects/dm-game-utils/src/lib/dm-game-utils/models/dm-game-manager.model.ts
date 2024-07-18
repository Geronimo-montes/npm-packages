import {
  DMColliderInterface,
  DMConfigCollision,
  DMListObjects,
} from "./dm-colaider.interface";
import { DMGameLogic, DMGameLogicList } from "./dm-game-manager.interface";
import {
  DMGlobalConfigRender,
  DMObjRenderList,
  DMRenderInterface,
  DMRenderSettingsInterface,
} from "./dm-render.interface";

export default class DmGameManager
  implements DMRenderSettingsInterface, DMRenderInterface, DMColliderInterface
{
  constructor(
    gameLogicIntancesList: DMGameLogicList,
    renderSettings: DMGlobalConfigRender
  ) {
    this.gameLogicIntancesList = gameLogicIntancesList;
    this.renderSettings = renderSettings;
  }

  public detectCollisions(): DMListObjects {
    return this.gameLogicIntancesList
      .map((value) => (<DMColliderInterface>value).detectCollisions())
      .flat(1);
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
    return this.gameLogicIntancesList
      .map((value) => (<DMRenderInterface>value).render())
      .flat(1);
  }

  public getRenderSettings(): DMGlobalConfigRender {
    return this.renderSettings;
  }

  public loop() {}

  private gameLogicIntancesList: DMGameLogicList;
  private renderSettings: DMGlobalConfigRender;
}
