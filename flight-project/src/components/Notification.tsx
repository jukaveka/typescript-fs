interface NotificationProps {
  notification: string;
}

const Notification = (props: NotificationProps) => {
  const { notification } = props;

  if (!notification) {
    return null;
  } else {
    return (
      <>
        <p style={{ color: "red" }}> {notification} </p>
      </>
    );
  }
};

export default Notification;
