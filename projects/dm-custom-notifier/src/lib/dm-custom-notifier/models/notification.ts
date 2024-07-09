export type DMNotificationType = "error" | "warning" | "info" | "succes";
export type DMNotificationAction = "Ok" | "Cancel";

export interface DMNotification {
  title: string;
  tpye: DMNotificationType;
  icon: string;
  message: string;
  accions: DMNotificationAction[];
  duration: number;
}
