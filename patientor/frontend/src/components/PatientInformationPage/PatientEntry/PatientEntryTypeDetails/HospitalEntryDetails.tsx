import { HospitalEntry } from "../../../../types";

import { Typography } from "@mui/material";

interface Props {
  entry: HospitalEntry;
}

const HospitalEntryDetails = ({ entry }: Props) => {
  return (
    <>
      <Typography variant="h6"> Discharge </Typography>
      <Typography> {entry.discharge.date}</Typography>
      <Typography> {entry.discharge.criteria} </Typography>
    </>
  );
};

export default HospitalEntryDetails;
