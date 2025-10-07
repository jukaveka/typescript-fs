import { Patient } from "../types";

import { Paper, Typography } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

interface Props {
  patient: Patient;
}

const PatientInformation = ({ patient }: Props) => {
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
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Information
      </Typography>
      <br />
      <Paper sx={{ padding: "20px", lineHeight: "25px" }}>
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
    </>
  );
};

export default PatientInformation;
