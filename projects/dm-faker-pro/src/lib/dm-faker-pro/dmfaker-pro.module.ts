import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DMFakerProConfigComponent } from "./components/dm-faker-pro-config/dm-faker-pro-config.component";
import { DMFakerProService } from "./services/dmfaker-pro.service";
import { DMFakerProLocaleService } from "./services/dm-faker-pro-locale.service";
import { DMFakerProPipe } from "./pipes/dmfaker-pro.pipe";
import { DMFakerProDirective } from "./directives/dmfaker-pro.directive";
import { BrowserModule } from "@angular/platform-browser";

const COMPONENTS: any[] = [DMFakerProConfigComponent];
const SERVICES: any[] = [DMFakerProService, DMFakerProLocaleService];
const PIPES: any[] = [DMFakerProPipe];
const DIRECTIVES: any[] = [DMFakerProDirective];

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  exports: [COMPONENTS, DIRECTIVES, PIPES],
  providers: [SERVICES],
})
export class DMFakerProModule {}
