import { useEffect, useState } from "react";

import diagnosisService from "../../../services/diagnosisService";

import { Diagnosis } from "../../../types";

import { Button, MenuItem, Select } from "@mui/material";

interface Props {
  diagnosisCodes: Array<Diagnosis["code"]> | undefined;
  setDiagnosisCodes: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

const DiagnosisPicker = ({ diagnosisCodes, setDiagnosisCodes }: Props) => {
  const [selectedDiagnosis, setSelectedDiagnosis] =
    useState<Diagnosis["code"]>("");
  const [allDiagnoses, setAllDiagnoses] = useState<Array<Diagnosis>>([]);

  const fetchDiagnosisList = async () => {
    const fetchedDiagnoses = await diagnosisService.getAll();
    setAllDiagnoses(fetchedDiagnoses);
  };

  useEffect(() => {
    fetchDiagnosisList();
  }, []);

  const addDiagnosis = () => {
    if (diagnosisCodes === undefined) {
      setDiagnosisCodes([selectedDiagnosis]);
    } else {
      setDiagnosisCodes(diagnosisCodes?.concat(selectedDiagnosis));
    }
    setSelectedDiagnosis("");
  };

  return (
    <>
      <Select
        id="new-entry-diagnosis-codes"
        fullWidth
        value={selectedDiagnosis}
        onChange={(event) => setSelectedDiagnosis(event.target.value)}
      >
        {allDiagnoses.map((diagnosis) => (
          <MenuItem
            key={`diagnosis-option-${diagnosis.code}`}
            value={diagnosis.code}
          >
            <b> {diagnosis.code} </b> - {diagnosis.name}
          </MenuItem>
        ))}
      </Select>

      <Button variant="text" onClick={addDiagnosis}>
        Add
      </Button>
    </>
  );
};

export default DiagnosisPicker;
