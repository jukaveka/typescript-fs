import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Patient } from "../../types";

import PatientService from "../../services/patientService";

import PatientInformation from "./PatientInformationBox";
import PatientEntry from "./PatientEntry";
import PatientEntryForm from "./PatientEntryForm";

import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";

const PatientInformationPage = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    PatientService.getById(id).then((data) => {
      setPatient(data);
    });
  }, [id]);

  if (!patient) return null;

  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          style: { marginBottom: "20pxx" },
        },
      },
      MuiTextField: {
        defaultProps: {
          style: { marginBottom: "20px" },
        },
      },
      MuiTypography: {
        defaultProps: {
          style: { marginBottom: "15px" },
        },
      },
      MuiSlider: {
        defaultProps: {
          style: { margin: "25px", width: "90%" },
        },
      },
      MuiSelect: {
        defaultProps: {
          style: { marginBottom: "20px" },
        },
      },
    },
  });

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PatientInformation patient={patient} />
          </Grid>

          <ThemeProvider theme={theme}>
            <Grid item xs={6}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                New entry
              </Typography>

              <PatientEntryForm patientId={patient.id} />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Entries
              </Typography>

              <>
                {patient.entries.map((entry) => {
                  return <PatientEntry key={entry.id} entry={entry} />;
                })}
              </>
            </Grid>
          </ThemeProvider>
        </Grid>
      </Container>
    </>
  );
};

export default PatientInformationPage;
