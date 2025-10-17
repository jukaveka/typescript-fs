import React from "react";

import { BaseEntryFields } from "../../../types";

import DiagnosisList from "../DiagnosisList";
import DiagnosisPicker from "./DiagnosisPicker";

import { Typography } from "@mui/material";

interface Props {
  baseEntryFields: BaseEntryFields;
  setBaseEntryFields: React.Dispatch<React.SetStateAction<BaseEntryFields>>;
}

const PatientEntryFormDiagnosis = ({
  baseEntryFields,
  setBaseEntryFields,
}: Props) => {
  const handleNewDiagnosisCode = (newValue: string) => {
    if (baseEntryFields.diagnosisCodes === undefined) {
      setBaseEntryFields({ ...baseEntryFields, diagnosisCodes: [newValue] });
    } else {
      const newDiagnosisCodes = baseEntryFields.diagnosisCodes.concat(newValue);
      setBaseEntryFields({
        ...baseEntryFields,
        diagnosisCodes: newDiagnosisCodes,
      });
    }
  };
  return (
    <>
      <Typography variant="subtitle1">
        Select diagnoses (zero, one or multiple) that you've confirmed during
        you examination. Choose diagnosis and press "Add" for each diagnosis
        separately.
      </Typography>
      <DiagnosisList diagnosisCodes={baseEntryFields.diagnosisCodes} />

      <DiagnosisPicker setDiagnosisCodes={handleNewDiagnosisCode} />
    </>
  );
};

export default PatientEntryFormDiagnosis;
