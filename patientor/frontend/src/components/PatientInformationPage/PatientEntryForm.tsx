import { Paper, TextField } from "@mui/material";
import { useState } from "react";

const PatientEntryForm = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [entryType, setEntryType] = useState("");

  return (
    <Paper sx={{ textAlign: "center", padding: "20px", lineHeight: "25px" }}>
      <form>
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

        <br />

        <TextField
          label="Description"
          variant="standard"
          id="new-entry-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <br />

        <TextField
          label="Diagnosis codes"
          variant="standard"
          id="new-entry-codes"
          value={diagnosisCodes}
          onChange={(event) => setDiagnosisCodes(event.target.value)}
        />

        <br />

        <TextField
          label="Type of visit"
          variant="standard"
          id="new-entry-type"
          value={entryType}
          onChange={(event) => setEntryType(event.target.value)}
        />
      </form>
    </Paper>
  );
};

export default PatientEntryForm;
