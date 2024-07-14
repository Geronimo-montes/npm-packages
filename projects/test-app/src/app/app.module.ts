import { NgModule } from "@angular/core";

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

const TEST_MODULES: any[] = [DMContextMenuModule, DMNotificationModule];

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
