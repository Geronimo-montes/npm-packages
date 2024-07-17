import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "dm-canvas-game",
  templateUrl: "./canvas-game.component.html",
  styleUrl: "./canvas-game.component.css",
})
export class CanvasGameComponent implements AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef = {} as ElementRef;
  context2DCanvas: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit(): void {
    this.context2DCanvas = this.canvas.nativeElement.getContext("2d");
  }
}
