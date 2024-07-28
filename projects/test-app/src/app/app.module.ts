import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoDMContextMenuModule } from "./demo-dm-context-menu/demo-dm-context-menu.module";
import { DemoCustomNotifierModule } from "./demo-dm-custom-notifier/demo-dm-custom-notifier.module";
import { DemoGameUtilsModule } from "./demo-dm-game-utils/demo-dm-game-utils.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DemoDMContextMenuModule,
    DemoCustomNotifierModule,
    DemoGameUtilsModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  //
})
export class AppModule {}
