import { Diagnosis } from "../../../types";

import { Typography } from "@mui/material";

interface Props {
  entryCodes: Array<Diagnosis["code"]> | undefined;
  diagnoses: Diagnosis[];
}

const PatientEntryDiagnosis = ({ entryCodes, diagnoses }: Props) => {
  if (!entryCodes) {
    return null;
  }

  const findEntryDiagnoses = (
    entryCodes: Array<Diagnosis["code"]>
  ): Array<Diagnosis> => {
    if (typeof entryCodes === "undefined") {
      return [];
    } else {
      return diagnoses.filter((diagnosis) =>
        entryCodes.includes(diagnosis.code)
      );
    }
  };

  return (
    <>
      <Typography variant="h6"> Diagnosis </Typography>

      {findEntryDiagnoses(entryCodes).map((diagnosis) => (
        <Typography key={diagnosis.code}>
          <b> {diagnosis.code} </b>
          {diagnosis.name}
        </Typography>
      ))}
    </>
  );
};

export default PatientEntryDiagnosis;
