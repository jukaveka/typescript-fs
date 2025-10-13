import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Diagnosis, Patient } from "../../types";

import PatientService from "../../services/patientService";

import PatientInformation from "./PatientInformationBox";
import PatientEntry from "./PatientEntry";

import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {
  diagnoses: Diagnosis[];
}

const PatientInformationPage = ({ diagnoses }: Props) => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    PatientService.getById(id).then((data) => {
      setPatient(data);
    });
  }, [id]);

  if (!patient) return null;

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ padding: "50px" }}>
            <Typography variant={"h3"} sx={{ textAlign: "center" }}>
              {patient.name}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <PatientInformation patient={patient} />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Entries
            </Typography>

            <Box sx={{ padding: "20px" }}>
              <>
                {patient.entries.map((entry) => {
                  return (
                    <PatientEntry
                      key={entry.id}
                      entry={entry}
                      diagnoses={diagnoses}
                    />
                  );
                })}
              </>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PatientInformationPage;
