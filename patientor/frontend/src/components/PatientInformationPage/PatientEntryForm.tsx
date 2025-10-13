import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PatientEntryForm = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [entryType, setEntryType] = useState("");

  const handleNewEntry = () => {
    console.log(date, description, diagnosisCodes, specialist, entryType);
  };

  return (
    <Paper sx={{ padding: "20px", lineHeight: "25px" }}>
      <Container>
        <form>
          <Box sx={{ paddingLeft: "20px" }}>
            <Box>
              <Typography variant="h6">Basic information</Typography>
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
            </Box>

            <br />

            <Box>
              <Typography variant="h6" sx={{ paddingBottom: "20px" }}>
                Description
              </Typography>

              <TextField
                label="Description"
                variant="outlined"
                id="new-entry-description"
                multiline
                rows={3}
                fullWidth
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Box>

            <br />

            <Box>
              <Typography variant="h6">Diagnosis</Typography>

              <TextField
                label="Diagnosis codes"
                variant="standard"
                id="new-entry-codes"
                value={diagnosisCodes}
                onChange={(event) => setDiagnosisCodes(event.target.value)}
              />
            </Box>

            <br />

            <Box>
              <Typography variant="h6">Entry type</Typography>

              <TextField
                label="Type of visit"
                variant="standard"
                id="new-entry-type"
                value={entryType}
                onChange={(event) => setEntryType(event.target.value)}
              />
            </Box>

            <br />

            <Button variant="contained" onClick={handleNewEntry}>
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Paper>
  );
};

export default PatientEntryForm;
