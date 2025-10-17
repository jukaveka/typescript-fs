import { TextField, Typography } from "@mui/material";
import { BaseEntryFields } from "../../../types";
import React from "react";

interface Props {
  baseEntryFields: BaseEntryFields;
  setBaseEntryFields: React.Dispatch<React.SetStateAction<BaseEntryFields>>;
}

const PatientEntryFormDescription = ({
  baseEntryFields,
  setBaseEntryFields,
}: Props) => {
  const handleDescriptionChange = (newValue: string) => {
    setBaseEntryFields({ ...baseEntryFields, description: newValue });
  };

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
        value={baseEntryFields.description}
        onChange={(event) => handleDescriptionChange(event.target.value)}
      />
    </>
  );
};

export default PatientEntryFormDescription;
