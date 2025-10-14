import React, { useState } from "react";
import { Diagnosis } from "../../../types";
import { Button, MenuItem, Select, Typography } from "@mui/material";

interface Props {
  diagnoses: Diagnosis[];
  diagnosisCodes: Array<Diagnosis["code"]> | undefined;
  setDiagnosisCodes: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

const PatientEntryFormDiagnosis = ({
  diagnoses,
  diagnosisCodes,
  setDiagnosisCodes,
}: Props) => {
  const [diagnosisCode, setDiagnosisCode] = useState("");

  const addDiagnosis = () => {
    if (diagnosisCodes === undefined) {
      setDiagnosisCodes([diagnosisCode]);
    } else {
      setDiagnosisCodes(diagnosisCodes?.concat(diagnosisCode));
    }
    setDiagnosisCode("");
  };

  const renderAddedDiagnoses = () => {
    const addedDiagnoses = diagnoses.filter((diagnosis) =>
      diagnosisCodes?.includes(diagnosis.code)
    );

    return addedDiagnoses.map((diagnosis) => (
      <Typography key={`selected-diagnosis-${diagnosis.code}`}>
        <br />
        <b>{diagnosis.code}</b> - {diagnosis.name}
      </Typography>
    ));
  };

  return (
    <>
      <Typography variant="subtitle1">
        Select diagnoses (zero, one or multiple) that you've confirmed during
        you examination. Choose diagnosis and press "Add" for each diagnosis
        separately.
      </Typography>
      {renderAddedDiagnoses()}
      <br />
      <Select
        id="new-entry-diagnosis-codes"
        fullWidth
        value={diagnosisCode}
        onChange={(event) => setDiagnosisCode(event.target.value)}
      >
        {diagnoses.map((diagnosis) => (
          <MenuItem key={`diagnosis-${diagnosis.code}`} value={diagnosis.code}>
            {diagnosis.code} - {diagnosis.name}{" "}
          </MenuItem>
        ))}
      </Select>
      <br /> <br />
      <Button variant="text" onClick={addDiagnosis}>
        Add
      </Button>
    </>
  );
};

export default PatientEntryFormDiagnosis;
