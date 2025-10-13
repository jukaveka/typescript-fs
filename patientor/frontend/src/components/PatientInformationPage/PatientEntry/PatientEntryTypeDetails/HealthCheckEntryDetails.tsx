import { HealthCheckEntry, healthCheckRating } from "../../../../types";

import { Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

interface Props {
  entry: HealthCheckEntry;
}

const HealthCheckEntryDetails = ({ entry }: Props) => {
  const renderHealthCheckRatingInformation = (
    healthCheckRating: healthCheckRating
  ) => {
    switch (healthCheckRating) {
      case 0:
        return <Favorite sx={{ color: "green" }} />;
      case 1:
        return <Favorite sx={{ color: "yellow" }} />;
      case 2:
        return <Favorite sx={{ color: "orange" }} />;
      case 3:
        return <Favorite sx={{ color: "red" }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Typography variant="h6"> Health rating </Typography>
      {renderHealthCheckRatingInformation(entry.healthCheckRating)}
    </>
  );
};

export default HealthCheckEntryDetails;
