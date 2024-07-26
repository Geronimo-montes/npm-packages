import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DMContextMenuModule } from "../../../dm-context-menu/src/lib/context-menu.module";
import { DMContextMenuService } from "../../../dm-context-menu/src/lib/services/dm-context-menu.service";
import { contextMenuNotifications } from "../../../dm-context-menu/src/public-api";
import { DMNotificationModule } from "../../../dm-custom-notifier/src/public-api";
import { SnakeMainGameHelper } from "../../../dm-game-utils/src/lib/dm-game-utils/games/snake/snake.model";
import {
  CONFIG_TOKEN,
  DMConfigGameManagerService,
  DMGameManagerHelper,
  DMGameManagerService,
  DMRenderHelper,
  DmColaiderHelper,
  DmGameUtilsModule,
} from "../../../dm-game-utils/src/public-api";
import { AppComponent } from "./app.component";
import { gameConfig } from "./game";
import { provideConfig } from "../../../dm-game-utils/src/lib/dm-game-utils/helpers/dm-game-manager-config.helper";

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
    DMGameManagerService,
    provideConfig(gameConfig),
    {
      provide: DMGameManagerService,
      useFactory: DMGameManagerHelper,
      deps: [CONFIG_TOKEN],
    },

    DMContextMenuService,
    { provide: "CONTEXT_MENU_CONFIG", useValue: contextMenuNotifications },
  ],
})
export class AppModule {}
