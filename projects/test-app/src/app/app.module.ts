import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DMContextMenuModule } from "../../../dm-context-menu/src/lib/context-menu.module";
import { DMContextMenuService } from "../../../dm-context-menu/src/lib/services/dm-context-menu.service";
import {
    contextMenuNotifications
} from "../../../dm-context-menu/src/public-api";
import { DMNotificationModule } from "../../../dm-custom-notifier/src/public-api";
import { SnakeMainGameHelper } from "../../../dm-game-utils/src/lib/dm-game-utils/games/snake/snake.model";
import {
    DMConfigGameManagerService,
    DMRenderHelper,
    DmColaiderHelper,
    DmGameUtilsModule
} from "../../../dm-game-utils/src/public-api";
import { AppComponent } from "./app.component";

const size =
  Math.floor(
    (Math.min(window.innerHeight, window.innerWidth) * 0.8 * 0.8) / 100
  ) * 100;
const pixel = 20;

const gameConfig: DMConfigGameManagerService = {
  rendererHelper: DMRenderHelper,
  colliderHelper: DmColaiderHelper,
  canvasConfig: {
    pixel,
    heightGrid: size / pixel,
    widthGrid: size / pixel,
    heightCanvas: size,
    widthCanvas: size,
  },
  mainClassGame: SnakeMainGameHelper,
};

const TEST_MODULES: any[] = [
  DMContextMenuModule,
  DMNotificationModule,
  DmGameUtilsModule,
];

@NgModule({
  imports: [BrowserModule, CommonModule, ...TEST_MODULES],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    // DMGameManagerService,
    // provideConfig(gameConfig),
    // {
    //   provide: DMGameManagerService,
    //   useFactory: DMGameManagerHelper,
    //   deps: [CONFIG_TOKEN],
    // },
    DMContextMenuService,
    { provide: "CONTEXT_MENU_CONFIG", useValue: contextMenuNotifications },
  ],
})
export class AppModule {}
