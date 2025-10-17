import React from "react";
import { BaseEntryFields } from "../../../types";
import { TextField, Typography } from "@mui/material";

interface Props {
  baseEntryFields: BaseEntryFields;
  setBaseEntryFields: React.Dispatch<React.SetStateAction<BaseEntryFields>>;
}

const PatientEntryFormBasic = ({
  baseEntryFields,
  setBaseEntryFields,
}: Props) => {
  const handleDateChange = (newValue: string) => {
    setBaseEntryFields({ ...baseEntryFields, date: newValue });
  };

  const handleSpecialistChange = (newValue: string) => {
    setBaseEntryFields({ ...baseEntryFields, specialist: newValue });
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ paddingBottom: "20px" }}>
        Enter date of the visit, admission or examination, and specialist who
        examined the patient.
      </Typography>
      <TextField
        label="Date"
        variant="standard"
        id="new-entry-date"
        value={baseEntryFields.date}
        onChange={(event) => handleDateChange(event.target.value)}
      />

      <TextField
        label="Specialist"
        variant="standard"
        id="new-entry-specialist"
        value={baseEntryFields.specialist}
        onChange={(event) => handleSpecialistChange(event.target.value)}
      />
    </>
  );
};

export default PatientEntryFormBasic;
