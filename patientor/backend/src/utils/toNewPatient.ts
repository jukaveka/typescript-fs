import { NewPatient } from "../types";
import { parseDateOfBirth, parseSsn, parseString } from "./parseValue";

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
      gender: parseString(object.gender, "Gender"),
      occupation: parseString(object.occupation, "Occupation"),
    };

    return newPatient;
  }

  throw new Error("Missing fields in request body");
};
