// src/app/config.helper.ts
import { Provider } from "@angular/core";
import {
  DMConfigGameManagerService,
  DM_CONFIG_SERVICE,
} from "../models/dm-game-manager.interface";

export function provideConfig(
  initialConfig: DMConfigGameManagerService
): Provider {
  return {
    provide: DM_CONFIG_SERVICE,
    useValue: initialConfig,
  };
}
