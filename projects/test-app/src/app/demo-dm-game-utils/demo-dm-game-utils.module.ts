import { NgModule } from "@angular/core";

import { DemoDMGameUtilsComponent } from "./demo-dm-game-utils.component";
import {
  CONFIG_TOKEN,
  DMGameManagerHelper,
  DMGameManagerService,
  DmGameUtilsModule,
  SnakeMainGameHelper,
  factoryGame,
  provideConfig,
} from "../../../../dm-game-utils/src/public-api";
import { DEFAULT_CONFIG } from "../../../../dm-game-utils/src/lib/dm-game-utils/models/dm-default-game-manager";

@NgModule({
  imports: [DmGameUtilsModule],
  exports: [DemoDMGameUtilsComponent],
  declarations: [DemoDMGameUtilsComponent],
  providers: [
    DMGameManagerService,
    provideConfig({ ...DEFAULT_CONFIG, mainClassGame: SnakeMainGameHelper}),
    {
      provide: DMGameManagerService,
      useFactory: DMGameManagerHelper,
      deps: [CONFIG_TOKEN],
    },
  ],
})
export class DemoGameUtilsModule {}
