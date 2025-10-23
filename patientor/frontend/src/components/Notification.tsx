import { useNotificationState } from "../context/NotificationContext";

import { Alert, Box, Container } from "@mui/material";
import { assertNever } from "../utils/assertNever";

const Notification = () => {
  const notification = useNotificationState();

  const noNotification = () => {
    return (
      notification === undefined ||
      notification.message === "" ||
      notification.type === "CLEAR"
    );
  };

  if (noNotification()) {
    return null;
  }

  const determineAlertSeverity = () => {
    switch (notification.type) {
      case "SUCCESS":
        return "success";
      case "ERROR":
        return "error";
      case "CLEAR":
        return "info";
      default:
        return assertNever(notification.type);
    }
  };

  return (
    <Container>
      <Box margin="25px">
        <Alert severity={determineAlertSeverity()}>
          {notification.message}
        </Alert>
      </Box>
    </Container>
  );
};

export default Notification;
