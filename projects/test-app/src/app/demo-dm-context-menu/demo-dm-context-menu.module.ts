import { NgModule } from "@angular/core";

import { DMContextMenuService } from "../../../../dm-context-menu/src/lib/services/dm-context-menu.service";
import { DemoDMContextMenuComponent } from "./demo-dm-context-menu.component";
import { contextmenu } from "./dm-context-menu";
import { DMContextMenuModule } from "../../../../dm-context-menu/src/lib/context-menu.module";
import { DMContextMenuComponent } from "../../../../dm-context-menu/src/public-api";

@NgModule({
  imports: [DMContextMenuModule],
  exports: [DemoDMContextMenuComponent],
  declarations: [DemoDMContextMenuComponent],
  providers: [
    DMContextMenuService,
    { provide: "CONTEXT_MENU_CONFIG", useValue: contextmenu },
  ],
})
export class DemoDMContextMenuModule {}
