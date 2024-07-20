import { APP_INITIALIZER, NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DMContextMenuModule } from "../../../dm-context-menu/src/lib/context-menu.module";
import { DMNotificationModule } from "../../../dm-custom-notifier/src/public-api";
import { AppComponent } from "./app.component";
import { DMContextMenuService } from "../../../dm-context-menu/src/lib/services/dm-context-menu.service";
import {
  contextMenu,
  contextMenuNotifications,
} from "../../../dm-context-menu/src/public-api";
import {
  DMGameManagerHelper,
  DmGameUtilsModule,
  DEFAULT_CONFIG,
} from "../../../dm-game-utils/src/public-api";
import { DMGameManagerService } from "../../../dm-game-utils/src/lib/dm-game-utils/services/dm-game-manager.service";

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
    DMContextMenuService,
    { provide: "CONTEXT_MENU_CONFIG", useValue: contextMenuNotifications },
  ],
})
export class AppModule {}
