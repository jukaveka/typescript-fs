import { useState } from "react";

import {
  Patient,
  EntryFormFields,
  healthCheckRating,
  Entry,
} from "../../../types";

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
  addPatientEntry: (entry: Entry) => void;
}

const defaultFormValues: EntryFormFields = {
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
};

const PatientEntryForm = ({ patientId, addPatientEntry }: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  const [entryFormFields, setEntryFormFields] =
    useState<EntryFormFields>(defaultFormValues);

  console.log(entryFormFields);

  const resetFormValues = () => {
    setEntryFormFields(defaultFormValues);
  };

  const handleNewEntry = async () => {
    const newEntryData = entryFormFields;

    try {
      const addedEntry = await patientService.addEntry(patientId, newEntryData);

      resetFormValues();
      setActiveStep(0);

      addPatientEntry(addedEntry);
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

                  <Box>
                    <EntryTypeFields
                      entryFormFields={entryFormFields}
                      setEntryFormFields={setEntryFormFields}
                    />
                  </Box>

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
                  <Box>
                    <FormReview entryFormFields={entryFormFields} />
                  </Box>

                  <Box>
                    <Button variant="contained" onClick={handleNewEntry}>
                      Submit
                    </Button>
                  </Box>
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
