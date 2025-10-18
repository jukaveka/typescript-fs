import { HealthCheckEntry } from "../../../../types";

import { Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

interface Props {
  healthCheckRating: HealthCheckEntry["healthCheckRating"];
}

const HealthCheckEntryDetails = ({ healthCheckRating }: Props) => {
  const renderHealthCheckRatingInformation = (
    healthCheckRating: HealthCheckEntry["healthCheckRating"]
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
      {renderHealthCheckRatingInformation(healthCheckRating)}
    </>
  );
};

export default HealthCheckEntryDetails;
