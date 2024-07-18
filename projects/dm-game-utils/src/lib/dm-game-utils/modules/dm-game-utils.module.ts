import { APP_INITIALIZER, NgModule } from "@angular/core";
import { DMCanvasGameComponent } from "../components/dm-canvas-game/dm-canvas-game.component";
import { KeyArrowDownDirective } from "../directives/dm-key-arrow-down.directive";
import { KeyArrowLeftDirective } from "../directives/dm-key-arrow-left.directive";
import { KeyArrowRightDirective } from "../directives/dm-key-arrow-right.directive";
import { KeyArrowUpDirective } from "../directives/dm-key-arrow-up.directive";
import { DMGameManagerService } from "../services/dm-game-manager.service";
import { dmInicializerGameManager } from "../helpers/dm-inicializer-game-manager.helper";
import { DmGameUtilsPipe } from '../pipes/dm-game-utils.pipe';

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
    {
      provide: APP_INITIALIZER,
      deps: [DMGameManagerService],
      useFactory: dmInicializerGameManager,
      multi: true,
    },
  ],
})
export class DmGameUtilsModule {}
