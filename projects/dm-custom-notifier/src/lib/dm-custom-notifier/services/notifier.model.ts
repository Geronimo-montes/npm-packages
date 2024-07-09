import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DMNotification } from "../models/notification";

export abstract class DMNotifierAbs {
  /**
   * Array to store active notifications.
   */
  protected abstract notifications: DMNotification[];

  /**
   * RxJS BehaviorSubject to manage the list of notifications.
   */
  protected abstract subjectNotifications: BehaviorSubject<DMNotification[]>;

  /**
   * Observable of the list of notifications to subscribe to changes.
   */
  public abstract notifications$: Observable<DMNotification[]>;

  /**
   * Creates a new notification and adds it to the list.
   * @param notifier The notification to add.
   */
  public abstract createNotifier(notifier: DMNotification): void;

  /**
   * Removes a notification from the list.
   * @param notifier The notification to remove.
   */
  public abstract destroyNotifier(notifier: DMNotification): void;
}
