import { Point } from "./footPoint";
import { Game } from "./game";

export interface RenderOptions {
  color: string;
  points: Point[];
}

export type ListRenderOptions = Array<RenderOptions>;

export interface Render {
  render(): ListRenderOptions;
}

export const render = (ctx: CanvasRenderingContext2D, game: Game) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const pixelAncho: number = game.pixelAncho;
  const drawPoint = (point: Point, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(
      point.x * pixelAncho,
      point.y * pixelAncho,
      pixelAncho,
      pixelAncho
    );
  };

  game.render().forEach((obj, index) => {
    obj.points.forEach((point) => {
      drawPoint(point, obj.color);
    });
  });
};
