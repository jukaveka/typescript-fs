import React from "react";
import { healthCheckRating } from "../../../types";
import { Box, Slider } from "@mui/material";

interface Props {
  healthCheckRating: healthCheckRating;
  setHealthCheckRating: React.Dispatch<React.SetStateAction<healthCheckRating>>;
}

const healthCheckRatingMarks = [
  {
    value: 0,
    label: "Healthy",
  },
  {
    value: 1,
    label: "Low risk",
  },
  {
    value: 2,
    label: "High risk",
  },
  {
    value: 3,
    label: "Critical risk",
  },
];

const HealthCheckEntryForm = ({
  healthCheckRating,
  setHealthCheckRating,
}: Props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setHealthCheckRating(newValue);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Slider
        defaultValue={0}
        value={healthCheckRating}
        onChange={handleChange}
        marks={healthCheckRatingMarks}
        min={0}
        max={3}
      />
    </Box>
  );
};

export default HealthCheckEntryForm;
