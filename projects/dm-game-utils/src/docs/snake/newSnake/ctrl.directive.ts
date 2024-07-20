import { Directive, HostListener } from "@angular/core";
import { GameSnakeService } from "./game.service";
import { DMEDireccion } from "../../../lib/dm-game-utils/models/dm-key.interface";

export interface OnKeydownDown {
  setDirection(diretion: DMEDireccion): void;
}

@Directive({ selector: "[onMoveSnake]" })
export class OnMoveSnake {
  constructor(protected gameService: GameSnakeService) {}

  @HostListener("window:keydown.arrowup", ["$event"])
  onKeydownUp(event: KeyboardEvent) {
    this.gameService.setDirection(DMEDireccion.UP);
  }

  @HostListener("window:keydown.arrowdown", ["$event"])
  onKeydownDown(event: KeyboardEvent) {
    this.gameService.setDirection(DMEDireccion.DOWN);
  }

  @HostListener("window:keydown.arrowleft", ["$event"])
  onKeydownLeft(event: KeyboardEvent) {
    this.gameService.setDirection(DMEDireccion.LEFT);
  }

  @HostListener("window:keydown.arrowright", ["$event"])
  onKeydownRight(event: KeyboardEvent) {
    this.gameService.setDirection(DMEDireccion.RIGHT);
  }
}
