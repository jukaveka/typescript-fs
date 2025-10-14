import { TextField, Typography } from "@mui/material";
import { Entry } from "../../../types";
import React from "react";

interface Props {
  description: Entry["description"];
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const PatientEntryFormDescription = ({
  description,
  setDescription,
}: Props) => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ paddingBottom: "20px" }}>
        Describe the reason for visit or admission, general talking points and
        any abnormalities you found
      </Typography>
      <TextField
        variant="outlined"
        id="new-entry-description"
        multiline
        rows={3}
        fullWidth
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
    </>
  );
};

export default PatientEntryFormDescription;
