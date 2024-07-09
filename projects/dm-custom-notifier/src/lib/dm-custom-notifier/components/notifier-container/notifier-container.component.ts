import { Component, OnInit } from "@angular/core";
import { DMNotifierService } from "../../services/notifier.service";
import { Observable } from "rxjs";
import { DMNotification } from "../../models/notification";

@Component({
  selector: "dm-notifier-container",
  templateUrl: "./notifier-container.component.html",
  styleUrl: "./notifier-container.component.css",
})
export class DMNotifierContainerComponent implements OnInit {
  public notifications: DMNotification[] = [];
  constructor(protected readonly notifierService: DMNotifierService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.notifierService.notifications$.subscribe(
      (notifications: DMNotification[]) => {
        this.notifications = notifications;
      }
    );
  }

  closeNotification($event: any) {
    this.notifierService.destroyNotifier($event);
  }
}
