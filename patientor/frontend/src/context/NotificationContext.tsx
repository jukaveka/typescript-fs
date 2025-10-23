import { createContext, ReactNode, useContext, useReducer } from "react";

import { NotificationReducer } from "../reducers/NotificationReducer";

import {
  NotificationAction,
  NotificationContextType,
  NotificationState,
} from "../types/NotificationTypes";

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

interface Props {
  children?: ReactNode;
}

export const NotificationContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(NotificationReducer, {
    message: null,
    type: "CLEAR",
  });

  return (
    <NotificationContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationState = (): NotificationState => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error("Notification context is undefined");
  }

  return context.state;
};

export const useNotificationDispatch =
  (): React.Dispatch<NotificationAction> => {
    const context = useContext(NotificationContext);

    if (context === undefined) {
      throw new Error("Notification context is undefined");
    }

    return context.dispatch;
  };

export default NotificationContextProvider;
