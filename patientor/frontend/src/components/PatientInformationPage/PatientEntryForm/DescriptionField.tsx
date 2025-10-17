import { TextField, Typography } from "@mui/material";
import { EntryFormFields } from "../../../types";
import React from "react";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const DescriptionField = ({ entryFormFields, setEntryFormFields }: Props) => {
  const handleDescriptionChange = (newValue: string) => {
    setEntryFormFields({ ...entryFormFields, description: newValue });
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
        value={entryFormFields.description}
        onChange={(event) => handleDescriptionChange(event.target.value)}
      />
    </>
  );
};

export default DescriptionField;
