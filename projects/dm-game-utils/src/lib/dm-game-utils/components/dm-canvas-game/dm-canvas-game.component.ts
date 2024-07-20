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
    console.log(this.gameManagerService.getCurrentConfig());
  }

  ngAfterViewInit(): void {
    this.context2DCanvas = this.canvas.nativeElement.getContext("2d");
    const { heightCanvas, widthCanvas } =
      this.gameManagerService.getCanvasConfig();
    this.canvas.nativeElement.width = heightCanvas;
    this.canvas.nativeElement.height = widthCanvas;

    this.gameManagerService.start(this.canvas.nativeElement.getContext("2d"));
  }

  heandle(event: any) {
    this.gameManagerService.addBufferKey(event.key);
    console.log(event.key);
  }
}
