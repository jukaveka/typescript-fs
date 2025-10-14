import { useState } from "react";

import { Diagnosis, healthCheckRating, Patient } from "../../../types";

import patientService from "../../../services/patientService";

import HospitalEntryForm from "./HospitalEntryForm";
import OccupationalEntryForm from "./OccupationalEntryForm";

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
import HealthCheckEntryForm from "./HealthCheckEntryForm";
import PatientEntryFormBasic from "./PatientEntryFormBasic";
import PatientEntryFormDescription from "./PatientEntryFormDescription";
import PatientEntryFormDiagnosis from "./PatientEntryFormDiagnosis";

interface Props {
  patientId: Patient["id"];
  diagnoses: Diagnosis[];
}

const PatientEntryForm = ({ patientId, diagnoses }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] =
    useState<Array<Diagnosis["code"]>>();
  const [specialist, setSpecialist] = useState("");
  const [type, setType] = useState("");

  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [sickLeaveStartDate, setSickLeaveStartDate] = useState("");
  const [sickLeaveEndDate, setSickLeaveEndDate] = useState("");

  const [healthCheckRating, setHealthCheckRating] =
    useState<healthCheckRating>(0);

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
      employerName,
      sickLeave: {
        startDate: sickLeaveStartDate,
        endDate: sickLeaveEndDate,
      },
      healthCheckRating,
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

  return (
    <Paper sx={{ padding: "20px", lineHeight: "25px" }}>
      <Container>
        <form>
          <Box sx={{ paddingLeft: "20px" }}>
            <Stepper activeStep={activeStep} nonLinear orientation="vertical">
              <Step>
                <StepButton onClick={() => handleStep(0)}>
                  Basic information
                </StepButton>

                <StepContent>
                  <PatientEntryFormBasic
                    date={date}
                    setDate={setDate}
                    specialist={specialist}
                    setSpecialist={setSpecialist}
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
                  <PatientEntryFormDescription
                    description={description}
                    setDescription={setDescription}
                  />
                  <br /> <br />
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(2)}>
                  Select appropriate diagnosis
                </StepButton>

                <StepContent>
                  <PatientEntryFormDiagnosis
                    diagnoses={diagnoses}
                    diagnosisCodes={diagnosisCodes}
                    setDiagnosisCodes={setDiagnosisCodes}
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
                  <OccupationalEntryForm
                    employerName={employerName}
                    setEmployerName={setEmployerName}
                    sickLeaveStartDate={sickLeaveStartDate}
                    setSickLeaveStartDate={setSickLeaveStartDate}
                    sickLeaveEndDate={sickLeaveEndDate}
                    setSickLeaveEndDate={setSickLeaveEndDate}
                  />
                  <br /> <br />
                  <HealthCheckEntryForm
                    healthCheckRating={healthCheckRating}
                    setHealthCheckRating={setHealthCheckRating}
                  />
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
