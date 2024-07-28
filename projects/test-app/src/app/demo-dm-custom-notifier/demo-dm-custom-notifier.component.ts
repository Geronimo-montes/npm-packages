import { Component } from "@angular/core";
import {
    DMNotification,
  DMNotificationType,
  DMNotifierService,
} from "../../../../dm-custom-notifier/src/public-api";

@Component({
  selector: "demo-dm-custom-notifier",
  templateUrl: "./demo-dm-custom-notifier.component.html",
  styleUrl: "./demo-dm-custom-notifier.component.css",
})
export class DemoDmCustomNotifierComponent {
  constructor(protected readonly notificationService: DMNotifierService) {}

  showNotificartion(type: DMNotificationType ): DMNotification {
    // const _ = Array.isArray(type) ? type : [type];
    // _.forEach((_type) => {
      return {
        title: "Notification " +type,
        type: type,
        icon: "",
        message: "Menssage content of notification.",
        actions: [],
        duration: 5000,
    //   });
    };
  }
}
