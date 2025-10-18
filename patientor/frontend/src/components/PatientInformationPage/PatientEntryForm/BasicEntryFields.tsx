import React from "react";
import { EntryFormFields } from "../../../types";
import { TextField, Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const BasicEntryFields = ({ entryFormFields, setEntryFormFields }: Props) => {
  const handleDateChange = (newValue: string) => {
    setEntryFormFields({ ...entryFormFields, date: newValue });
  };

  const handleSpecialistChange = (newValue: string) => {
    setEntryFormFields({ ...entryFormFields, specialist: newValue });
  };

  return (
    <>
      <Typography variant="subtitle1">
        Enter date of the visit, admission or examination, and specialist who
        examined the patient.
      </Typography>

      <TextField
        label="Date"
        variant="standard"
        id="new-entry-date"
        value={entryFormFields.date}
        onChange={(event) => handleDateChange(event.target.value)}
      />

      <TextField
        label="Specialist"
        variant="standard"
        id="new-entry-specialist"
        value={entryFormFields.specialist}
        onChange={(event) => handleSpecialistChange(event.target.value)}
      />
    </>
  );
};

export default BasicEntryFields;
