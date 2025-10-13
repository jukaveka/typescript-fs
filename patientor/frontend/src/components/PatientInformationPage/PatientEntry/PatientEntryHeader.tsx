import { Entry } from "../../../types";

import { assertNever } from "../../../utils/assertNever";

import { Typography } from "@mui/material";

interface Props {
  entry: Entry;
}

const PatientEntryHeader = ({ entry }: Props) => {
  const renderEntryType = (type: Entry["type"]) => {
    switch (type) {
      case "Hospital":
        return <> Hospital</>;
      case "OccupationalHealthcare":
        return <> Occupational healthcare</>;
      case "HealthCheck":
        return <> Health checkup</>;
      default:
        return assertNever(type);
    }
  };

  return (
    <Typography component="span">
      {entry.date} - {renderEntryType(entry.type)} - {entry.specialist}
    </Typography>
  );
};

export default PatientEntryHeader;
