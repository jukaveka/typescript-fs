import { createContext, ReactNode, useContext, useReducer } from "react";
import { NotificationReducer } from "../reducers/NotificationReducer";
import {
  NotificationAction,
  NotificationContextType,
  NotificationState,
} from "../types";

const NotificationContext = createContext<NotificationContextType | null>(null);

interface Props {
  children?: ReactNode;
}

export const NotificationContextProvider = ({ children }: Props) => {
  const [notification, setNotification] = useReducer(NotificationReducer, {
    message: null,
    type: "CLEAR",
  });

  return (
    <NotificationContext.Provider
      value={{ notification: notification, setNotification: setNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationState = (): NotificationState | undefined => {
  const context = useContext(NotificationContext);

  return context?.notification;
};

export const useSetNotificationState = ():
  | React.Dispatch<NotificationAction>
  | undefined => {
  const context = useContext(NotificationContext);

  return context?.setNotification;
};

export default NotificationContextProvider;
