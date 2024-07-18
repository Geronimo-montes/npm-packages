import DmGameManager from "./dm-game-manager.model";
import { DMPoint } from "./dm-render.interface";

const colliderPrototype = (game: DmGameManager): DMCollisionResult[] => {
  return [];
};

export type DMColliderFunc = typeof colliderPrototype;

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
