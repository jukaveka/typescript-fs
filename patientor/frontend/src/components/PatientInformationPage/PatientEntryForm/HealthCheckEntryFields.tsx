import React from "react";

import { HealhtCheckEntryFields, healthCheckRating } from "../../../types";

import { Slider, Typography } from "@mui/material";

interface Props {
  healthCheckEntryFields: HealhtCheckEntryFields;
  setHealthCheckEntryFields: React.Dispatch<
    React.SetStateAction<healthCheckRating>
  >;
}

const HealthCheckMarks = Object.entries(healthCheckRating)
  .slice(Object.entries(healthCheckRating).length / 2)
  .map((ratingArray) => {
    return { value: ratingArray[1], label: ratingArray[0] };
  })
  .map((ratingObject) => {
    return {
      value: Number(ratingObject.value),
      label: ratingObject.label.split(/(?=[A-Z])/).join(" "),
    };
  });

const HealthCheckEntryForm = ({
  healthCheckEntryFields,
  setHealthCheckEntryFields,
}: Props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setHealthCheckEntryFields(newValue);
    }
  };

  return (
    <>
      <Typography variant="subtitle1">
        Select appropriate health rating for patient based on your examination
      </Typography>
      <Slider
        value={healthCheckEntryFields}
        onChange={handleChange}
        marks={HealthCheckMarks}
        min={0}
        max={3}
      />
    </>
  );
};

export default HealthCheckEntryForm;
