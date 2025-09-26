import { NonSensitivePatient } from "../types";
import { parseString, parseDateOfBirth } from "./parseValue";

export const toNonSensitivePatient = (object: unknown): NonSensitivePatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Missing or incomplete data in request body");
  }

  if (
    "id" in object &&
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const nonSensitivePatient = {
      id: parseString(object.id, "ID"),
      name: parseString(object.name, "Name"),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      gender: parseString(object.gender, "Gender"),
      occupation: parseString(object.occupation, "Occupation"),
    };

    return nonSensitivePatient;
  }

  throw new Error("Object given as parameter is missing required fields.");
};
