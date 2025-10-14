import React from "react";
import { Entry } from "../../../types";
import { TextField, Typography } from "@mui/material";

interface Props {
  date: Entry["date"];
  setDate: React.Dispatch<React.SetStateAction<string>>;
  specialist: Entry["specialist"];
  setSpecialist: React.Dispatch<React.SetStateAction<string>>;
}

const PatientEntryFormBasic = ({
  date,
  setDate,
  specialist,
  setSpecialist,
}: Props) => {
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
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <br />
      <TextField
        label="Specialist"
        variant="standard"
        id="new-entry-specialist"
        value={specialist}
        onChange={(event) => setSpecialist(event.target.value)}
      />
    </>
  );
};

export default PatientEntryFormBasic;
