import { NotificationAction, NotificationState } from "../types";

export const NotificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "SUCCESS":
      return {
        message: action.payload,
        type: "SUCCESS",
      };
    case "ERROR":
      return {
        message: action.payload,
        type: "ERROR",
      };
    case "CLEAR":
      return { message: "", type: "CLEAR" };
    default:
      return state;
  }
};

export const setSuccessNotification = (
  dispatch: (action: NotificationAction) => NotificationState,
  type: NotificationAction["type"],
  payload: NotificationAction["payload"]
) => {
  dispatch({ type: type, payload: payload });
  setTimeout(() => {
    dispatch({ type: "CLEAR", payload: "" });
  });
};
