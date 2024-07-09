import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DMNotifierComponent } from "./components/notifier/notifier.component";
import { DMNotifierService } from "./services/notifier.service";
import { BrowserModule } from "@angular/platform-browser";
import { DMOnCreateNotifierDirective } from "./directives/on-create-notifier.directive";
import { DMNotifierContainerComponent } from "../../public-api";
import { DMOnClickNotifierDirective } from "./directives/on-click-notifier.directive";

const COMPONENTS: any[] = [DMNotifierComponent, DMNotifierContainerComponent];
const SERVICES: any[] = [DMNotifierService];
const DIRECTIVES: any[] = [DMOnCreateNotifierDirective, DMOnClickNotifierDirective];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES],
  exports: [COMPONENTS, DIRECTIVES],
  providers: [SERVICES],
  imports: [CommonModule, BrowserModule],
})
export class DMNotificationModule {}
