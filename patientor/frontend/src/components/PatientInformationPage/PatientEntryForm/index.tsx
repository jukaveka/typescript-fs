import { useState } from "react";

import { Patient, EntryFormFields, healthCheckRating } from "../../../types";

import patientService from "../../../services/patientService";

import BasicEntryFields from "./BasicEntryFields";
import DescriptionField from "./DescriptionField";
import DiagnosisField from "./DiagnosisField";
import EntryTypeFields from "./EntryTypeFields";
import FormReview from "./FormReview";

import {
  Box,
  Button,
  Container,
  Paper,
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

  const [entryFormFields, setEntryFormFields] = useState<EntryFormFields>({
    date: "",
    description: "",
    diagnosisCodes: [],
    specialist: "",
    type: "Hospital",
    discharge: {
      date: "",
      criteria: "",
    },
    employerName: "",
    sickLeave: {
      startDate: "",
      endDate: "",
    },
    healthCheckRating: healthCheckRating.Healthy,
  });

  console.log(entryFormFields);

  const handleNewEntry = () => {
    const newEntryData = entryFormFields;

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
                  <BasicEntryFields
                    entryFormFields={entryFormFields}
                    setEntryFormFields={setEntryFormFields}
                  />

                  <Box>
                    <Button variant="contained" onClick={handleNext}>
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(1)}>
                  Description
                </StepButton>

                <StepContent>
                  <DescriptionField
                    entryFormFields={entryFormFields}
                    setEntryFormFields={setEntryFormFields}
                  />
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
                  <DiagnosisField
                    entryFormFields={entryFormFields}
                    setEntryFormFields={setEntryFormFields}
                  />

                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </StepContent>
              </Step>

              <Step>
                <StepButton onClick={() => handleStep(3)}>
                  Type of entry
                </StepButton>

                <StepContent>
                  <Typography variant="subtitle1">
                    Select the type of visit and fill the required fields
                  </Typography>

                  <EntryTypeFields
                    entryFormFields={entryFormFields}
                    setEntryFormFields={setEntryFormFields}
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
                  <FormReview entryFormFields={entryFormFields} />
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
