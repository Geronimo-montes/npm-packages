import {
  DMColliderInterface,
  DMConfigCollision,
  DMListObjects,
} from "./dm-colaider.interface";
import {
  DMGlobalConfigRender,
  DMObjRenderList,
  DMRenderInterface,
  DMRenderSettingsInterface,
} from "./dm-render.interface";

export default class DmGameManager
  implements DMRenderSettingsInterface, DMRenderInterface, DMColliderInterface
{
  //
  constructor() {} // ... INYECTAR DEPS

  public detectCollisions(): DMListObjects {
    throw new Error("Method not implemented.");
  }

  public getConfigCollision(): DMConfigCollision {
    throw new Error("Method not implemented.");
  }

  public render(): DMObjRenderList {
    throw new Error("Method not implemented.");
  }

  public getRenderSettings(): DMGlobalConfigRender {
    throw new Error("Method not implemented.");
  }
}
