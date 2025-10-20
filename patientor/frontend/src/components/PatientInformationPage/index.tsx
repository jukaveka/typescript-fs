import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Entry, Patient } from "../../types";

import PatientService from "../../services/patientService";

import PatientInformation from "./PatientInformationBox";
import PatientEntry from "./PatientEntry";
import PatientEntryForm from "./PatientEntryForm";

import { Container, Grid, Typography } from "@mui/material";

const PatientInformationPage = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    PatientService.getById(id).then((data) => {
      setPatient(data);
    });
  }, [id]);

  if (!patient) return null;

  const addPatientEntry = (entry: Entry) => {
    const updatedPatientEntries = patient.entries.concat(entry);
    const updatedPatient = { ...patient, entries: updatedPatientEntries };
    setPatient(updatedPatient);
  };

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PatientInformation patient={patient} />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              New entry
            </Typography>

            <PatientEntryForm
              patientId={patient.id}
              addPatientEntry={addPatientEntry}
            />
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
        </Grid>
      </Container>
    </>
  );
};

export default PatientInformationPage;
