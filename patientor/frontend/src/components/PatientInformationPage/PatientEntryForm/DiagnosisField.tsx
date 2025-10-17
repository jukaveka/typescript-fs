import React from "react";

import { EntryFormFields } from "../../../types";

import DiagnosisList from "../DiagnosisList";
import DiagnosisPicker from "./DiagnosisPicker";

import { Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const DiagnosisField = ({ entryFormFields, setEntryFormFields }: Props) => {
  const handleNewDiagnosisCode = (newValue: string) => {
    if (entryFormFields.diagnosisCodes === undefined) {
      setEntryFormFields({ ...entryFormFields, diagnosisCodes: [newValue] });
    } else {
      const newDiagnosisCodes = entryFormFields.diagnosisCodes.concat(newValue);
      setEntryFormFields({
        ...entryFormFields,
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
      <DiagnosisList diagnosisCodes={entryFormFields.diagnosisCodes} />

      <DiagnosisPicker setDiagnosisCodes={handleNewDiagnosisCode} />
    </>
  );
};

export default DiagnosisField;
