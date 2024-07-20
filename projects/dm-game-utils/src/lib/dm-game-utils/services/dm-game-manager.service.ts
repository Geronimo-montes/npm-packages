import { Injectable } from "@angular/core";
import { interval, map, takeWhile, tap } from "rxjs";
import {
  DMColliderFunc,
  DMCollisionResult,
} from "../models/dm-colaider.interface";
import {
  DEFAULT_CONFIG,
  DMConfigGameManagerService,
  DMGameManageAPI,
} from "../models/dm-game-manager.interface";
import { KeyboardKey } from "../models/dm-key.interface";
import { DMObjRenderList, DMRenderFunc } from "../models/dm-render.interface";
import DmGameManager from "../models/dm-game-manager.model";
import { DMCanvasConfig } from "../models/dm-canvas-grid.interface";

/**
 * To inject the configuration into the service, it must be specified in the module.
 *
 * module.ts
 * ```
 *   providers: [
 *     DMGameManagerService,
 *     {
 *       provide: APP_INITIALIZER,
 *       deps: [DMGameManagerService],
 *       useFactory: initializeDMGameManagerService,
 *       multi: true,
 *     },
 *   ],
 * ```
 */
@Injectable({
  providedIn: "root",
})
export class DMGameManagerService {
  private mainClassGame!: DMGameManageAPI;
  private canvasConfig!: DMCanvasConfig;
  private rendererHelper!: DMRenderFunc;
  private colliderHelper!: DMColliderFunc;
  private config: DMConfigGameManagerService = {} as DMConfigGameManagerService;
  private loop = interval(100);
  bufferKey: KeyboardKey[] = [];

  constructor() {
    this.initialize(DEFAULT_CONFIG);
  }

  /**
   * Starts the main game loop.
   *
   * @param canvas The canvas element where the game will be rendered.
   */
  start(canvas: any) {
    this.loop
      .pipe(
        map(() => {
          this.mainClassGame.setKey(<string>this.getKey());
          return this.colliderHelper(this.mainClassGame, this.canvasConfig);
        }),
        tap(() =>
          this.rendererHelper(canvas, this.mainClassGame, this.canvasConfig)
        ),
        takeWhile((collisions) => this.validateCollisions(collisions)),
        tap(() => this.mainClassGame.loop())
      )
      .subscribe(() => {});
  }

  addBufferKey(key: string) {
    this.bufferKey.push(<KeyboardKey>key);
  }

  getKey() {
    const key = this.bufferKey.pop();
    this.bufferKey = [];
    return key;
  }

  /**
   * Initializes the service.
   * This method should be called from the component once it has fully loaded.
   *
   * @param config The configuration needed to initialize the service.
   * @returns A promise that resolves when the service has been initialized.
   */
  initialize(config: DMConfigGameManagerService): Promise<void> {
    return new Promise((resolve) => {
      console.log({
        CurrentConfig: this.config,
        NewConfig: config,
      });

      this.mainClassGame = config.mainClassGame;
      this.canvasConfig = config.canvasConfig;
      this.rendererHelper = config.rendererHelper;
      this.colliderHelper = config.colliderHelper;

      this.config = config;
      resolve();
    });
  }

  /**
   * Gets the current configuration of the service.
   *
   * @returns The current service configuration.
   */
  public getCurrentConfig(): DMConfigGameManagerService {
    return this.config;
  }

  /**
   * Renders the game objects.
   *
   * @returns The list of rendered objects.
   */
  render(): DMObjRenderList {
    return this.mainClassGame.render();
  }

  /**
   * Validates the detected collisions.
   *
   * @param collisions List of collision results.
   * @returns `true` if the collisions are valid, `false` otherwise.
   */
  validateCollisions(collisions: DMCollisionResult[]): boolean {
    // TODO: Add global property for helper validator state collisions
    return true;
  }
  /**
   * Retrieves the canvas configuration.
   *
   * @return {DMCanvasConfig} The canvas configuration.
   */

  public getCanvasConfig(): DMCanvasConfig {
    return this.canvasConfig;
  }
}
