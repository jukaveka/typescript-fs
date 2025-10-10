import {
  NewPatient,
  NewPatientSchema,
  NonSensitivePatient,
  NonSensitivePatientSchema,
} from "../types/patientTypes";

export const toNewPatient = (object: unknown): NewPatient => {
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

export const toNonSensitivePatient = (object: unknown): NonSensitivePatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Patient object is missing or not object");
  }

  try {
    const parsedPatient = NonSensitivePatientSchema.parse(object);

    return parsedPatient;
  } catch (error) {
    throw new Error(`Couldn't parse object into NewPatient. ${error}`);
  }
};
