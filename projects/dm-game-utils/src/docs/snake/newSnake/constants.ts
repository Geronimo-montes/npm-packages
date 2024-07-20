import { EDireccion } from "./ctrl.directive";

export const CONSTANTES_SNAKE = {
  dimension: 30,
  pixel: 15,
  initFoot: { x: 20, y: 16 },
  direction: EDireccion.UP,
  speed: 1,
  snake: Array(6)
    .fill({ x: 0, y: 0 })
    .map((value, index, array) => ({ x: 10, y: index + 10 })),
};