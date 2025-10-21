import React from "react";

import { EntryFormFields } from "../../../types";

import { entryDateIsValid } from "../../../utils/dateOperations";

import { Box, TextField, Typography } from "@mui/material";

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

      <Box>
        {entryDateIsValid(entryFormFields.date) ? (
          <>
            <TextField
              type="date"
              variant="standard"
              id="new-entry-date"
              value={entryFormFields.date}
              onChange={(event) => handleDateChange(event.target.value)}
            />
          </>
        ) : (
          <>
            <TextField
              error
              helperText="Entry date can't be in the future"
              type="date"
              variant="standard"
              id="new-entry-date"
              value={entryFormFields.date}
              onChange={(event) => handleDateChange(event.target.value)}
            />
          </>
        )}
      </Box>

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
