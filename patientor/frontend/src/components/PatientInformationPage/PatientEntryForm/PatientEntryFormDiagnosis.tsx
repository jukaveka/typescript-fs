import React from "react";

import { Diagnosis } from "../../../types";

import DiagnosisList from "../DiagnosisList";

import { Typography } from "@mui/material";
import DiagnosisPicker from "./DiagnosisPicker";

interface Props {
  diagnosisCodes: Array<Diagnosis["code"]> | undefined;
  setDiagnosisCodes: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

const PatientEntryFormDiagnosis = ({
  diagnosisCodes,
  setDiagnosisCodes,
}: Props) => {
  return (
    <>
      <Typography variant="subtitle1">
        Select diagnoses (zero, one or multiple) that you've confirmed during
        you examination. Choose diagnosis and press "Add" for each diagnosis
        separately.
      </Typography>
      <DiagnosisList diagnosisCodes={diagnosisCodes} />
      <br />
      <br /> <br />
      <DiagnosisPicker
        diagnosisCodes={diagnosisCodes}
        setDiagnosisCodes={setDiagnosisCodes}
      />
    </>
  );
};

export default PatientEntryFormDiagnosis;
