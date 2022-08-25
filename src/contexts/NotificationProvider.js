import React, { useContext, useState } from "react";
import {Alert, Snackbar} from "@mui/material"

export const NotificationsContext =
  React.createContext(null);

export const NotificationsProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const notify = React.useCallback(({ severity, message }) => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity);
  }, []);

  const closeNotification = React.useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    },
    []
  );

  const value = React.useMemo(() => ({ notify }), [notify]);

  return (
    <NotificationsContext.Provider value={value}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={closeNotification}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeNotification}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw Error("useNotification must be used within NotificationsProvider");
  }

  return context;
};
