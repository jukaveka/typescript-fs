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
      <div>
        <PatientEntryTypeDetails entry={entry} />
      </div>

      <br />

      <div>
        <Typography variant="h6"> Description </Typography>
        <Typography> {entry.description} </Typography>
      </div>

      <br />

      <div>
        <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
        <Typography> EntryDetails.tsx </Typography>
      </div>
    </>
  );
};

export default PatientEntryDetails;
