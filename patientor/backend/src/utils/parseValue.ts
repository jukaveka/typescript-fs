import {
  NewPatient,
  NewPatientSchema,
  NonSensitivePatient,
  NonSensitivePatientSchema,
} from "../types/patientTypes";
import { NewEntry, NewEntrySchema } from "../types/entryTypes";

export const parseNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Patient object is missing or not object");
  }

  try {
    const parsedPatient = NewPatientSchema.parse(object);

    return parsedPatient;
  } catch (error) {
    throw new Error(`Couldn't parse object into NewPatient. ${error}`);
  }
};

export const parseNonsensitivePatient = (
  object: unknown
): NonSensitivePatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Patient object is missing or not object");
  }

  try {
    const parsedPatient = NonSensitivePatientSchema.parse(object);

    return parsedPatient;
  } catch (error) {
    throw new Error(
      `Couldn't parse object into non-sensitive patient. ${error}`
    );
  }
};

export const parseNewEntry = (object: unknown): NewEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Entry object is missing or not object");
  }

  try {
    const parsedNewEntry = NewEntrySchema.parse(object);

    return parsedNewEntry;
  } catch (error) {
    throw new Error(`Couldn't parse object into newEntry. ${error}`);
  }
};
