import { EntryFormFields } from "../types";
import { assertNever } from "./assertNever";

export const parseNewEntryFromValues = (object: EntryFormFields) => {
  const baseEntryObject = {
    date: object.date,
    specialist: object.specialist,
    description: object.description,
    diagnosisCodes: object.diagnosisCodes,
    type: object.type,
  };

  switch (object.type) {
    case "Hospital":
      return {
        ...baseEntryObject,
        discharge: object.discharge,
      };
    case "OccupationalHealthcare":
      return {
        ...baseEntryObject,
        employerName: object.employerName,
        sickLeave: object.sickLeave,
      };
    case "HealthCheck":
      return {
        ...baseEntryObject,
        healthCheckRating: object.healthCheckRating,
      };
    default:
      return assertNever(object.type);
  }
};
