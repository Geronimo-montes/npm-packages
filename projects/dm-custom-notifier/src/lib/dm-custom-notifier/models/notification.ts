export type DMNotificationType = "error" | "warning" | "info" | "success";
export type DMNotificationAction = "Ok" | "Cancel";

export interface DMNotification {
  title: string;
  type: DMNotificationType;
  icon: string;
  message: string;
  actions: DMNotificationAction[];
  duration: number;
}
