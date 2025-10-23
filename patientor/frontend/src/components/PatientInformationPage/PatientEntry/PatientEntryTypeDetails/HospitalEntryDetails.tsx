import { HospitalEntry } from "../../../../types/PatientEntryTypes";

import { Typography } from "@mui/material";

interface Props {
  discharge: HospitalEntry["discharge"];
}

const HospitalEntryDetails = ({ discharge }: Props) => {
  return (
    <>
      <Typography variant="h6"> Discharge </Typography>
      <Typography> {discharge.date}</Typography>
      <Typography> {discharge.criteria} </Typography>
    </>
  );
};

export default HospitalEntryDetails;
