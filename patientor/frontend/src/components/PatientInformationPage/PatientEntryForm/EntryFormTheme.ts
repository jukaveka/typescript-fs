import { createTheme } from "@mui/material";

export const EntryFormTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        style: { marginBottom: "10px" },
      },
    },

    MuiTextField: {
      defaultProps: {
        style: { marginBottom: "25px", width: "100%" },
      },
    },

    MuiTypography: {
      defaultProps: {
        style: { marginBottom: "20px" },
      },
    },

    MuiSlider: {
      defaultProps: {
        style: { margin: "25px", width: "90%" },
      },
    },

    MuiSelect: {
      defaultProps: {
        style: { margin: "15px 0px" },
      },
    },
  },
});
