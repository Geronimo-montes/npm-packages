import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DMNotification } from "../models/notification";

@Injectable()
export class DMNotifierService {
  /**
   *
   */
  private notifications: DMNotification[] = [];

  /**
   *
   */
  private subjectNotifications: BehaviorSubject<DMNotification[]> =
    new BehaviorSubject<DMNotification[]>([]);

  /**
   *
   */
  public notifications$: Observable<DMNotification[]> =
    this.subjectNotifications.asObservable();

  constructor() {}

  /**
   *
   */
  public createNotifier(notifier: DMNotification) {
    this.notifications.push(notifier);
    this.subjectNotifications.next(this.notifications);
  }

  /**
   *
   */
  public destroyNotifier(notifier: DMNotification) {
    this.notifications = this.notifications.filter((v, i, a) => v !== notifier);
    this.subjectNotifications.next(this.notifications);
  }
}
