import { NgModule } from "@angular/core";
import { DmGameUtilsComponent } from "./dm-game-utils.component";
import { CanvasGameComponent } from "./dm-game-utils/components/canvas-game/canvas-game.component";
import { KeyArrowLeftDirective } from "./dm-game-utils/directives/key-arrow-left.directive";
import { KeyArrowRightDirective } from "./dm-game-utils/directives/key-arrow-right.directive";
import { KeyArrowUpDirective } from "./dm-game-utils/directives/key-arrow-up.directive";
import { KeyArrowDownDirective } from "./dm-game-utils/directives/key-arrow-down.directive";

@NgModule({
  declarations: [
    DmGameUtilsComponent,
    CanvasGameComponent,
    KeyArrowLeftDirective,
    KeyArrowRightDirective,
    KeyArrowUpDirective,
    KeyArrowDownDirective,
  ],
  imports: [],
  exports: [
    DmGameUtilsComponent,
    CanvasGameComponent,
    KeyArrowLeftDirective,
    KeyArrowRightDirective,
    KeyArrowUpDirective,
    KeyArrowDownDirective,
  ],
})
export class DmGameUtilsModule {}
