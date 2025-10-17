import { useState } from "react";

import {
  BaseEntryFields,
  Diagnosis,
  Entry,
  healthCheckRating,
  HospitalEntryFields,
  OccupationalEntryFields,
  HealhtCheckEntryFields,
  Patient,
} from "../../../types";

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

const PatientEntryForm = ({ patientId }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  const [baseEntryFields, setBaseEntryFields] = useState<BaseEntryFields>({
    date: "",
    description: "",
    diagnosisCodes: [],
    specialist: "",
    type: "Hospital",
  });

  console.log(baseEntryFields);

  const [HospitalEntryFields, setHospitalEntryFields] =
    useState<HospitalEntryFields>({
      discharge: {
        date: "",
        criteria: "",
      },
    });

  const [OccupationalEntryFields, setOccupationalEntryFields] =
    useState<OccupationalEntryFields>({
      employerName: "",
      sickLeave: {
        startDate: "",
        endDate: "",
      },
    });

  const [healthCheckFields, setHealthCheckFields] =
    useState<HealhtCheckEntryFields>({
      healthCheckRating: 0,
    });

  const [type, setType] = useState<Entry["type"]>("Hospital");

  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [sickLeaveStartDate, setSickLeaveStartDate] = useState("");
  const [sickLeaveEndDate, setSickLeaveEndDate] = useState("");

  const [healthCheckRating, setHealthCheckRating] =
    useState<healthCheckRating>(0);

  const formValues = {
    date: baseEntryFields.date,
    description: baseEntryFields.description,
    diagnosisCodes: baseEntryFields.diagnosisCodes,
    specialist: baseEntryFields.specialist,
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
                    baseEntryFields={baseEntryFields}
                    setBaseEntryFields={setBaseEntryFields}
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
                    baseEntryFields={baseEntryFields}
                    setBaseEntryFields={setBaseEntryFields}
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
                    baseEntryFields={baseEntryFields}
                    setBaseEntryFields={setBaseEntryFields}
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
                    id="new-entry-type"
                    fullWidth
                    value={type}
                    onChange={(event) =>
                      setType(event.target.value as Entry["type"])
                    }
                  >
                    <MenuItem key={`entry-type-hospital`} value={"Hospital"}>
                      Hospital
                    </MenuItem>
                    <MenuItem
                      key={`entry-type-occupational`}
                      value={"OccupationalHealthcare"}
                    >
                      Occupational healthcare
                    </MenuItem>
                    <MenuItem
                      key={`entry-type-healthcheck`}
                      value={"HealthCheck"}
                    >
                      Health check
                    </MenuItem>
                  </Select>

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
