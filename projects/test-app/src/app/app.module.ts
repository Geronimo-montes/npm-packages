import { NgModule } from "@angular/core";
import {
  CONFIG_TOKEN,
  DMGameManagerHelper,
  DMGameManagerService,
  DmGameUtilsModule,
  gameConfig,
  provideConfig,
} from "../../../dm-game-utils/src/public-api";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, CommonModule, DmGameUtilsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    DMGameManagerService,
    provideConfig(gameConfig),
    {
      provide: DMGameManagerService,
      useFactory: DMGameManagerHelper,
      deps: [CONFIG_TOKEN],
    },
  ],
})
export class AppModule {}
