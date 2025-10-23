type NotificationType = "SUCCESS" | "ERROR" | "CLEAR";

export interface NotificationAction {
  type: NotificationType;
  payload: string | null;
}

export interface NotificationState {
  message: string | null;
  type: NotificationType;
}

export type NotificationDispatch = React.Dispatch<NotificationAction>;

export interface NotificationContextType {
  state: NotificationState;
  dispatch: NotificationDispatch;
}
