import { Alert, Box, Container } from "@mui/material";
import { useNotificationState } from "../context/NotificationContext";

const Notification = () => {
  const notification = useNotificationState();

  console.log(notification);

  if (notification === undefined || notification.type === "CLEAR") {
    return null;
  }

  return (
    <Container>
      <Box margin="25px">
        <Alert severity="success"> {notification.message} </Alert>
      </Box>
    </Container>
  );
};

export default Notification;
