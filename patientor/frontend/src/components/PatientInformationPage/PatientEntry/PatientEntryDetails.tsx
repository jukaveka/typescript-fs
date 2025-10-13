import { Diagnosis, Entry } from "../../../types";

import PatientEntryTypeDetails from "./PatientEntryTypeDetails";
import PatientEntryDiagnosis from "./PatientEntryDiagnosis";

import { Typography } from "@mui/material";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const PatientEntryDetails = ({ entry, diagnoses }: Props) => {
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
        <PatientEntryDiagnosis
          entryCodes={entry.diagnosisCodes}
          diagnoses={diagnoses}
        />
      </div>
    </>
  );
};

export default PatientEntryDetails;
