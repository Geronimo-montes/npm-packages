import { APP_INITIALIZER, NgModule } from "@angular/core";
import { DMCanvasGameComponent } from "../components/dm-canvas-game/dm-canvas-game.component";
import { KeyArrowDownDirective } from "../directives/dm-key-arrow-down.directive";
import { KeyArrowLeftDirective } from "../directives/dm-key-arrow-left.directive";
import { KeyArrowRightDirective } from "../directives/dm-key-arrow-right.directive";
import { KeyArrowUpDirective } from "../directives/dm-key-arrow-up.directive";
import { DMGameManagerService } from "../services/dm-game-manager.service";
import { DMGameManagerHelper } from "../helpers/dm-game-manager.helper";
import { DmGameUtilsPipe } from "../pipes/dm-game-utils.pipe";
import {
  DEFAULT_CONFIG,
  DM_CONFIG_SERVICE,
} from "../models/dm-game-manager.interface";
import { provideConfig } from "../helpers/dm-game-manager-config.helper";

@NgModule({
  declarations: [
    DMCanvasGameComponent,
    KeyArrowLeftDirective,
    KeyArrowRightDirective,
    KeyArrowUpDirective,
    KeyArrowDownDirective,
    DmGameUtilsPipe,
  ],
  imports: [],
  exports: [
    DMCanvasGameComponent,
    KeyArrowLeftDirective,
    KeyArrowRightDirective,
    KeyArrowUpDirective,
    KeyArrowDownDirective,
    DmGameUtilsPipe,
  ],
  providers: [
    DMGameManagerService,
    provideConfig(DEFAULT_CONFIG),
    {
      provide: APP_INITIALIZER,
      deps: [DM_CONFIG_SERVICE],
      useFactory: DMGameManagerHelper,
      multi: true,
    },
  ],
})
export class DmGameUtilsModule {}
