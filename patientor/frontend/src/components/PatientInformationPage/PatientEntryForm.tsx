import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepButton,
  StepContent,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PatientEntryForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [entryType, setEntryType] = useState("");

  const handleNewEntry = () => {
    console.log(date, description, diagnosisCodes, specialist, entryType);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleStep = (targetStep: number) => {
    setActiveStep(targetStep);
  };

  return (
    <Paper sx={{ padding: "20px", lineHeight: "25px" }}>
      <Container>
        <form>
          <Box sx={{ paddingLeft: "20px" }}>
            <Stepper activeStep={activeStep} nonLinear orientation="vertical">
              <Step>
                <StepButton onClick={() => handleStep(0)}>
                  Basic information about visit
                </StepButton>

                <StepContent>
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
                  <br />
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(1)}>
                  Description
                </StepButton>

                <StepContent>
                  {" "}
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ paddingBottom: "20px" }}
                    >
                      Describe the reason for visit, general talking points and
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
                    <br /> <br />
                    <Button variant="contained" onClick={handleNext}>
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(2)}>
                  Select appropriate diagnosis
                </StepButton>

                <StepContent>
                  <Typography variant="subtitle1">
                    Write diagnosis codes of issues you found during the
                    examination
                  </Typography>
                  <TextField
                    label="Diagnosis codes"
                    variant="standard"
                    id="new-entry-codes"
                    value={diagnosisCodes}
                    onChange={(event) => setDiagnosisCodes(event.target.value)}
                  />
                  <br /> <br />
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(3)}>
                  Add information based on type of visit
                </StepButton>

                <StepContent>
                  <Typography variant="h6">Entry type</Typography>
                  <TextField
                    label="Type of visit"
                    variant="standard"
                    id="new-entry-type"
                    value={entryType}
                    onChange={(event) => setEntryType(event.target.value)}
                  />
                  <br /> <br />
                  <Button variant="contained" onClick={handleNext}>
                    Review
                  </Button>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(4)}>
                  Review entry and submit
                </StepButton>
                <StepContent>
                  <Button variant="contained" onClick={handleNewEntry}>
                    Submit
                  </Button>
                </StepContent>
              </Step>
            </Stepper>
          </Box>
        </form>
      </Container>
    </Paper>
  );
};

export default PatientEntryForm;
