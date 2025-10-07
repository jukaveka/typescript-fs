import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Patient } from "../types";

import PatientService from "../services/patients";

import { Container, Grid, Paper, Typography } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

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

  const patientGenderIcon = () => {
    switch (patient.gender) {
      case "male":
        return <MaleIcon />;
      case "female":
        return <FemaleIcon />;
      case "other":
        return <TransgenderIcon />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Grid xs={12} sx={{ padding: "50px" }}>
            <Typography variant={"h3"} sx={{ textAlign: "center" }}>
              {patient.name}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Information
            </Typography>
            <br />
            <Paper sx={{ padding: "20px" }}>
              <Typography variant="h6"> Gender </Typography>
              <Typography>
                {patientGenderIcon()} {patient.gender}
              </Typography>
              <br />
              <Typography variant="h6"> SSN </Typography>
              <Typography> {patient.ssn} </Typography>
              <br />
              <Typography variant="h6"> Occupation </Typography>
              <Typography> {patient.occupation} </Typography>
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Entries
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PatientInformationPage;
