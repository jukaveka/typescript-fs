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
import HospitalEntryForm from "./HospitalEntryForm";
import patientService from "../../../services/patientService";
import { Diagnosis, Patient } from "../../../types";

interface Props {
  patientId: Patient["id"];
}

const PatientEntryForm = ({ patientId }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] =
    useState<Array<Diagnosis["code"]>>();
  const [specialist, setSpecialist] = useState("");
  const [type, setType] = useState("");

  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");

  const handleNewEntry = () => {
    const newEntryData = {
      date,
      description,
      diagnosisCodes,
      specialist,
      type,
      discharge: {
        date: dischargeDate,
        criteria: dischargeCriteria,
      },
    };

    try {
      patientService.addEntry(patientId, newEntryData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleStep = (targetStep: number) => {
    setActiveStep(targetStep);
  };

  const addDiagnosis = () => {
    if (diagnosisCodes === undefined) {
      setDiagnosisCodes([diagnosisCode]);
    } else {
      setDiagnosisCodes(diagnosisCodes?.concat(diagnosisCode));
    }
    setDiagnosisCode("");
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
                    value={diagnosisCode}
                    onChange={(event) => setDiagnosisCode(event.target.value)}
                  />
                  <br /> <br />
                  <Button variant="text" onClick={addDiagnosis}>
                    {" "}
                    Add
                  </Button>
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
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  />
                  <br /> <br />
                  <HospitalEntryForm
                    dischargeDate={dischargeDate}
                    setDischargeDate={setDischargeDate}
                    dischargeCriteria={dischargeCriteria}
                    setDischargeCriteria={setDischargeCriteria}
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
