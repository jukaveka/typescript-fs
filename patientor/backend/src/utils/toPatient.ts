import { NonSensitivePatient, NewPatient } from "../types";
import {
  parseString,
  parseDateOfBirth,
  parseSsn,
  parseGender,
} from "./parseValue";

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
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, "Occupation"),
    };

    return nonSensitivePatient;
  }

  throw new Error(
    "Couldn't convert to non-sensitive patient due to missing fields"
  );
};

export const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Missing or incomplete data in request body");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient = {
      name: parseString(object.name, "Name"),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, "Occupation"),
    };

    return newPatient;
  }

  throw new Error(
    "Couldn't convert to new patient object due to missing fields."
  );
};
