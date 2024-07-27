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

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    DMContextMenuComponent,
    DMItemContextMenuComponent,
    ClickDirective,
    HoverDirective,
    ContextMenuContentDirective,
    ContextMenuDirective,
  ],
  exports: [
    DMContextMenuComponent,
    DMItemContextMenuComponent,
    ClickDirective,
    HoverDirective,
    ContextMenuContentDirective,
    ContextMenuDirective,
  ],
  providers: [DMContextMenuService],
})
export class DMContextMenuModule {}
