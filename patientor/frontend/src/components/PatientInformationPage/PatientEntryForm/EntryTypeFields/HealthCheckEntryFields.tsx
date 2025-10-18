import React from "react";

import { EntryFormFields, healthCheckRating } from "../../../../types";

import { Slider, Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
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

const HealthCheckEntryFields = ({
  entryFormFields,
  setEntryFormFields,
}: Props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setEntryFormFields({ ...entryFormFields, healthCheckRating: newValue });
    }
  };

  return (
    <>
      <Typography variant="subtitle1">
        Select appropriate health rating for patient based on your examination
      </Typography>

      <Slider
        value={entryFormFields.healthCheckRating}
        onChange={handleChange}
        marks={HealthCheckMarks}
        min={0}
        max={3}
      />
    </>
  );
};

export default HealthCheckEntryFields;
