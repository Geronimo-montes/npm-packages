import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { DMGameManagerService } from "../../services/dm-game-manager.service";

@Component({
  selector: "dm-canvas-game",
  templateUrl: "./dm-canvas-game.component.html",
  styleUrl: "./dm-canvas-game.component.css",
})
export class DMCanvasGameComponent implements AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef = {} as ElementRef;
  context2DCanvas: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  constructor(private gameManagerService: DMGameManagerService) {}

  ngOnInit(): void {
    const config = this.gameManagerService.getCurrentConfig();
    console.debug("Configuración actual del servicio:", config);
  }

  ngAfterViewInit(): void {
    this.context2DCanvas = this.canvas.nativeElement.getContext("2d");
    console.debug("Canvas Element is:", this.canvas);
    console.debug("Context2DCanvas Element is:", this.context2DCanvas);
  }
}
