import { useEffect, useState } from "react";

import { Diagnosis } from "../../types/DiagnosisTypes";

import diagnosisService from "../../services/diagnosisService";

import { Typography } from "@mui/material";

interface Props {
  diagnosisCodes: Array<Diagnosis["code"]> | undefined;
}

const DiagnosisList = ({ diagnosisCodes }: Props) => {
  const [allDiagnoses, setAllDiagnoses] = useState<Diagnosis[]>([]);

  const fetchDiagnosisList = async () => {
    const fetchedDiagnoses = await diagnosisService.getAll();
    setAllDiagnoses(fetchedDiagnoses);
  };

  useEffect(() => {
    fetchDiagnosisList();
  }, []);

  const visibleDiagnoses = allDiagnoses.filter((diagnosis) =>
    diagnosisCodes?.includes(diagnosis.code)
  );

  return (
    <>
      {visibleDiagnoses.map((diagnosis) => (
        <Typography key={`diagnosis-${diagnosis.code}`}>
          <b>{diagnosis.code}</b> - {diagnosis.name}
        </Typography>
      ))}
    </>
  );
};

export default DiagnosisList;
