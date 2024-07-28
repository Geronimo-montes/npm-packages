import { NgModule } from "@angular/core";

import { DemoDmCustomNotifierComponent } from "./demo-dm-custom-notifier.component";
import {
  DMNotificationModule,
  DMNotifierService,
} from "../../../../dm-custom-notifier/src/public-api";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, BrowserModule, DMNotificationModule],
  exports: [DemoDmCustomNotifierComponent],
  declarations: [DemoDmCustomNotifierComponent],
  providers: [DMNotifierService],
})
export class DemoCustomNotifierModule {}
