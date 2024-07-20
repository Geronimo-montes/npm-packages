// src/app/config.helper.ts
import { Provider } from "@angular/core";
import {
  CONFIG_TOKEN,
  DMConfigGameManagerService,
} from "../models/dm-game-manager.interface";

export function provideConfig(
  initialConfig: DMConfigGameManagerService
): Provider {
  return {
    provide: CONFIG_TOKEN,
    useValue: initialConfig,
  };
}
