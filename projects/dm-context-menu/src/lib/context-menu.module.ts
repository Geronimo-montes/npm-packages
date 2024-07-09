import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DMContextMenuComponent } from "./components/dm-context-menu/dm-context-menu.component";
import { DMItemContextMenuComponent } from "./components/dm-item-context-menu/dm-item-context-menu.component";
import { DMContextMenuService } from "./services/dm-context-menu.service";
import {
  ClickDirective,
  ContextMenuContentDirective,
  ContextMenuDirective,
  HoverDirective,
} from "./directives";

const DIRECTIVES: any[] = [
  // ClickDirective,
  // HoverDirective,
  ContextMenuContentDirective,
  ContextMenuDirective,
];

const SERVICES: any[] = [DMContextMenuService];

const COMPONENTS: any[] = [DMContextMenuComponent, DMItemContextMenuComponent];

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS],
  providers: [...SERVICES],
})
export class DMContextMenuModule {}
