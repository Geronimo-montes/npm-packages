import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
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

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.context2DCanvas = this.canvas.nativeElement.getContext("2d");
    const { heightCanvas, widthCanvas, heightGrid, pixel, widthGrid } =
      this.gameManagerService.getCanvasConfig();

    this.canvas.nativeElement.height = heightGrid * pixel; // window.innerHeight * 0.95;
    this.canvas.nativeElement.width = widthGrid * pixel; //window.innerWidth * 0.95;

    this.gameManagerService.start(this.canvas.nativeElement.getContext("2d"));
  }

  heandle(event: any) {
    this.gameManagerService.addBufferKey(event.key);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.canvas.nativeElement.width = window.innerWidth * 0.95;
    this.canvas.nativeElement.height = window.innerHeight * 0.95;
  }
}
