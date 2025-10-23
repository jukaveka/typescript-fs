import { OccupationalHealthCareEntry } from "../../../../types/PatientEntryTypes";

import { Typography } from "@mui/material";

interface Props {
  employerName: OccupationalHealthCareEntry["employerName"];
  sickLeave?: OccupationalHealthCareEntry["sickLeave"];
}

const OccupationalEntryDetails = ({ employerName, sickLeave }: Props) => {
  const renderSickLeave = (
    sickLeave: OccupationalHealthCareEntry["sickLeave"] | undefined
  ) => {
    if (sickLeave === undefined || sickLeave.ordered === false) {
      return null;
    } else {
      return (
        <>
          <Typography variant="h6"> Sick leave </Typography>{" "}
          <Typography>
            {sickLeave.startDate} - {sickLeave.endDate}{" "}
          </Typography>
        </>
      );
    }
  };

  return (
    <>
      <Typography variant="h6"> Employer </Typography>
      <Typography> {employerName} </Typography>

      {renderSickLeave(sickLeave)}
    </>
  );
};

export default OccupationalEntryDetails;
