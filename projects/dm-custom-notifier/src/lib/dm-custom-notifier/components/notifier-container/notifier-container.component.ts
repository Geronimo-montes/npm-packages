import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { DMNotification } from "../../models/notification";
import { DMNotifierService } from "../../services/notifier.service";

@Component({
  selector: "dm-notifier-container",
  templateUrl: "./notifier-container.component.html",
  styleUrl: "./notifier-container.component.css",
})
export class DMNotifierContainerComponent implements OnInit, OnDestroy {
  constructor(protected readonly notifierService: DMNotifierService) {}

  public notifications: DMNotification[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.notifierService.notifications$
      .pipe(takeUntil(this.destroy$))
      .subscribe((notifications: DMNotification[]) => {
        this.notifications = notifications;
      });
  }
}
