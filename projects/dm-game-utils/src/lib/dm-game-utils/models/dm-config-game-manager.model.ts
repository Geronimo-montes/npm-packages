import { DMGameManagerService } from "../services/dm-game-manager.service";

export interface DMConfigGameManager {
  render: () => void;
  skin: MDSkinType;
  gameBase: DMGameBaseType;
  serviceClass: DMGameManagerService;
  renderer: DMRendererType;
  collider: DMColliderType;
  classGame: DMClassGameType;
}

export type MDSkinType = {};
export type DMGameBaseType = {};
export type DMRendererType = {};
export type DMColliderType = {};
export type DMClassGameType = {};
