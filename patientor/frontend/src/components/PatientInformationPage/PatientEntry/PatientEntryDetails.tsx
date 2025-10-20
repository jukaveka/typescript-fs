import { Entry } from "../../../types";

import PatientEntryTypeDetails from "./PatientEntryTypeDetails";

import { Typography } from "@mui/material";
import DiagnosisList from "../DiagnosisList";

interface Props {
  entry: Entry;
}

const PatientEntryDetails = ({ entry }: Props) => {
  return (
    <>
      <PatientEntryTypeDetails entry={entry} />

      <Typography variant="h6"> Description </Typography>
      <Typography variant="subtitle1"> {entry.description} </Typography>

      {entry.diagnosisCodes === undefined ? null : (
        <>
          <Typography variant="h6"> Diagnosis</Typography>
          <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
        </>
      )}
    </>
  );
};

export default PatientEntryDetails;
