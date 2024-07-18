import { Injectable } from "@angular/core";
import { interval, map, takeWhile, tap } from "rxjs";
import {
  DMColliderFunc,
  DMCollisionResult,
} from "../models/dm-colaider.interface";
import { DMConfigGameManagerService } from "../models/dm-game-manager.interface";
import DmGameManager from "../models/dm-game-manager.model";
import {
  DMGlobalConfigRender,
  DMObjRenderList,
  DMRenderFunc,
} from "../models/dm-render.interface";

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
  private gameManager!: DmGameManager;
  private renderSettings!: DMGlobalConfigRender;
  private renderHelper!: DMRenderFunc;
  private colliderHelper!: DMColliderFunc;
  private loop = interval(100);

  constructor() {}

  /**
   * Starts the main game loop.
   *
   * @param canvas The canvas element where the game will be rendered.
   */
  start(canvas: any) {
    this.loop
      .pipe(
        map(() => this.colliderHelper(this.gameManager)),
        tap(() => this.renderHelper(canvas, this.gameManager)),
        takeWhile((collisions) => this.validateCollisions(collisions)),
        tap(() => this.gameManager.loop())
      )
      .subscribe(() => {});
  }

  /**
   * Initializes the service.
   * This method should be called from the component once it has fully loaded.
   *
   * @param config The configuration needed to initialize the service.
   * @returns A promise that resolves when the service has been initialized.
   */
  initialize({
    gameManager,
    renderSettings,
    renderHelper: render,
    colliderHelper: collider,
  }: DMConfigGameManagerService): Promise<void> {
    return new Promise((resolve) => {
      this.gameManager = gameManager;
      this.renderSettings = renderSettings;
      this.renderHelper = render;
      this.colliderHelper = collider;

      console.log({
        msg: "Current Config",
        config: {
          gameManager: this.gameManager,
          renderSettings: this.renderSettings,
          colliderHelper: this.colliderHelper,
          renderHelper: this.renderHelper,
        },
      });

      resolve();
    });
  }

  /**
   * Gets the current configuration of the service.
   *
   * @returns The current service configuration.
   */
  public getCurrentConfig(): DMConfigGameManagerService {
    return {
      gameManager: this.gameManager,
      renderSettings: this.renderSettings,
      colliderHelper: this.colliderHelper,
      renderHelper: this.renderHelper,
    };
  }

  /**
   * Renders the game objects.
   *
   * @returns The list of rendered objects.
   */
  render(): DMObjRenderList {
    return this.gameManager.render();
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

  // TODO: Send user input to the game.
}
