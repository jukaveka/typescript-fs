import {
  NotificationAction,
  NotificationDispatch,
  NotificationState,
} from "../types";

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
  dispatch: NotificationDispatch,
  payload: NotificationAction["payload"]
) => {
  dispatch({ type: "SUCCESS", payload: payload });
  setTimeout(() => {
    dispatch({ type: "CLEAR", payload: "" });
  }, 5000);
};

export const setErrorNotification = (
  dispatch: NotificationDispatch,
  payload: NotificationAction["payload"]
) => {
  dispatch({ type: "ERROR", payload: payload });
  setTimeout(() => {
    dispatch({ type: "CLEAR", payload: "" });
  }, 5000);
};
