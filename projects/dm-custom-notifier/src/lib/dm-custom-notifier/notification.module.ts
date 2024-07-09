import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DMNotifierComponent } from "./components/notifier/notifier.component";
import { NotifierService } from "./services/notifier.service";
import { BrowserModule } from "@angular/platform-browser";
import { DMNotifierDirective } from "./directives/notifier.directive";
import { DMNotifierContainerComponent } from "../../public-api";

const COMPONENTS: any[] = [DMNotifierComponent, DMNotifierContainerComponent];
const SERVICES: any[] = [NotifierService];
const DIRECTIVES: any[] = [DMNotifierDirective];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES],
  exports: [COMPONENTS, DIRECTIVES],
  providers: [SERVICES],
  imports: [CommonModule, BrowserModule],
})
export class DMNotificationModule {}
