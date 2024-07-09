import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DMNotification } from "../models/notification";

@Injectable()
export class DMNotifierService {
  /**
   * Array to store active notifications.
   */
  private notifications: DMNotification[] = [];

  /**
   * RxJS BehaviorSubject to manage the list of notifications.
   */
  private subjectNotifications: BehaviorSubject<DMNotification[]> =
    new BehaviorSubject<DMNotification[]>([]);

  /**
   * Observable of the list of notifications to subscribe to changes.
   */
  public notifications$: Observable<DMNotification[]> =
    this.subjectNotifications.asObservable();

  constructor() {}

  /**
   * Creates a new notification and adds it to the list.
   * @param notifier The notification to add.
   */
  public createNotifier(notifier: DMNotification) {
    this.notifications.push(notifier);
    this.subjectNotifications.next(this.notifications);

    setTimeout(() => {
      this.destroyNotifier(notifier);
    }, notifier.duration);
  }

  /**
   * Removes a notification from the list.
   * @param notifier The notification to remove.
   */
  public destroyNotifier(notifier: DMNotification) {
    this.notifications = this.notifications.filter((v, i, a) => v !== notifier);
    this.subjectNotifications.next(this.notifications);
  }
}
