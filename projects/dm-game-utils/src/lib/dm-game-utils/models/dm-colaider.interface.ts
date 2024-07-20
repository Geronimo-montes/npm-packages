import { DmColaiderHelper } from "../helpers/dm-colaider.helper";
import DmGameManager from "./dm-game-manager.model";
import { DMPoint } from "./dm-render.interface";

export type DMColliderFunc = typeof DmColaiderHelper;

export interface DMConfigCollision {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface DMColliderInterface {
  detectCollisions(): DMListObjects;
  getConfigCollision(): DMConfigCollision;
}

export interface DMCollisionResult {
  objectA: any;
  objectB: any;
  impactPoint: { x: number; y: number };
  impactTime: number;
}
export type DMListColliderPoints = Array<DMCollisionResult>;

export type DMObjPoints = { object: any; points: DMPoint[] };
export type DMListObjects = Array<DMObjPoints>;
