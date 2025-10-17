import { OccupationalHealthCareEntry, SickLeave } from "../../../../types";

import { Typography } from "@mui/material";

interface Props {
  entry: OccupationalHealthCareEntry;
}

const OccupationalEntryDetails = ({ entry }: Props) => {
  const renderSickLeave = (sickLeave: SickLeave | undefined) => {
    if (!sickLeave) {
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
      <Typography> {entry.employerName} </Typography>

      {renderSickLeave(entry.sickLeave)}
    </>
  );
};

export default OccupationalEntryDetails;
