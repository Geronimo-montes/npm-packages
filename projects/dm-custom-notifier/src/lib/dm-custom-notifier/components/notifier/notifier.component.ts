import { Component, EventEmitter, Input, Output, output } from "@angular/core";
import { DMNotification } from "../../models/notification";

@Component({
  selector: "dm-notifier",
  templateUrl: "./notifier.component.html",
  styleUrl: "./notifier.component.css",
})
export class DMNotifierComponent {
  @Input("notification")
  notification!: DMNotification;

  @Output("onEvent")
  onEvent: EventEmitter<DMNotification> = new EventEmitter<DMNotification>();

  onClose() {
    this.onEvent.emit(this.notification);
  }
}
