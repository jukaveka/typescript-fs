import { useState } from "react";

import { Diagnosis, Entry, healthCheckRating, Patient } from "../../../types";

import patientService from "../../../services/patientService";

import HospitalEntryForm from "./HospitalEntryFields";
import OccupationalEntryForm from "./OccupationalEntryFields";
import HealthCheckEntryForm from "./HealthCheckEntryFields";
import PatientEntryFormBasic from "./PatientEntryFormBasic";
import PatientEntryFormDescription from "./PatientEntryFormDescription";
import PatientEntryFormDiagnosis from "./PatientEntryFormDiagnosis";
import PatientEntryFormReview from "./PatientEntryFormReview";

import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
} from "@mui/material";

interface Props {
  patientId: Patient["id"];
}

const entryTypes = [
  {
    value: "Hospital",
    label: "Hospital",
  },
  {
    value: "OccupationalHealthcare",
    label: "Occupational healthcare",
  },
  {
    value: "HealthCheck",
    label: "Health check",
  },
];

const PatientEntryForm = ({ patientId }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] =
    useState<Array<Diagnosis["code"]>>();
  const [specialist, setSpecialist] = useState("");
  const [type, setType] = useState<Entry["type"]>("");

  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [sickLeaveStartDate, setSickLeaveStartDate] = useState("");
  const [sickLeaveEndDate, setSickLeaveEndDate] = useState("");

  const [healthCheckRating, setHealthCheckRating] =
    useState<healthCheckRating>(0);

  const formValues = {
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

  const handleNewEntry = () => {
    const newEntryData = formValues;

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

  const renderTypeSpecificFields = () => {
    switch (type) {
      case "Hospital":
        return (
          <HospitalEntryForm
            dischargeDate={dischargeDate}
            setDischargeDate={setDischargeDate}
            dischargeCriteria={dischargeCriteria}
            setDischargeCriteria={setDischargeCriteria}
          />
        );
      case "OccupationalHealthcare":
        return (
          <OccupationalEntryForm
            employerName={employerName}
            setEmployerName={setEmployerName}
            sickLeaveStartDate={sickLeaveStartDate}
            setSickLeaveStartDate={setSickLeaveStartDate}
            sickLeaveEndDate={sickLeaveEndDate}
            setSickLeaveEndDate={setSickLeaveEndDate}
          />
        );
      case "HealthCheck":
        return (
          <HealthCheckEntryForm
            healthCheckRating={healthCheckRating}
            setHealthCheckRating={setHealthCheckRating}
          />
        );
      default:
        return null;
    }
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
                  <Typography variant="subtitle1">
                    Select the type of visit and fill the required fields
                  </Typography>
                  <Select
                    id="new-entry-diagnosis-codes"
                    fullWidth
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                  >
                    {entryTypes.map((type) => (
                      <MenuItem
                        key={`entry-type-${type.value}`}
                        value={type.value}
                      >
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />

                  {renderTypeSpecificFields()}

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
                  <PatientEntryFormReview formValues={formValues} />
                  <br /> <br />
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
