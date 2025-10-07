import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Patient } from "../types";

import PatientService from "../services/patients";

import { Box, Container, Grid, Typography } from "@mui/material";

import PatientEntry from "./PatientEntry";
import PatientInformation from "./PatientInformation";

const PatientInformationPage = () => {
  const { id } = useParams();

  console.log(id);
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
              {patient.entries.map((entry) => {
                return <PatientEntry key={entry.id} entry={entry} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PatientInformationPage;
