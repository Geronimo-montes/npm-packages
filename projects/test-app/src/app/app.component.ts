import { Component } from "@angular/core";
import { contextMenuNotifications } from "../../../dm-context-menu/src/lib/mock/dm-context-menu.mock";
import { DMContextMenuItem } from "../../../dm-context-menu/src/public-api";
import {
  DMNotification,
  DMNotificationType
} from "../../../dm-custom-notifier/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  contextMenu = contextMenuNotifications;
  accionSelected?: DMContextMenuItem;
  constructor() {}

  heandle(event: any) {
    console.log({ origin: "root", event });
  }

  create(): DMNotification {
    const type = this.accionSelected ? this.accionSelected.title : "info";
    return {
      title: `Titulo: ${type}`,
      type: <DMNotificationType>type,
      icon: "icon",
      message: `Message de tipo ${type}`,
      actions: [],
      duration: 5000,
    };
  }
}
