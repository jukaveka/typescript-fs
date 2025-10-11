import { v4 as uuid } from "uuid";
import patientData from "../data/patientData";
import {
  Patient,
  NonSensitivePatient,
  NewPatient,
} from "../types/patientTypes";
import { Entry, NewEntry } from "../types/entryTypes";
import { parseNonsensitivePatient } from "../utils/parseValue";

const getPatients = (): Patient[] => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  const nonSensitivePatientData = patientData.map((patient) =>
    parseNonsensitivePatient(patient)
  );

  return nonSensitivePatientData;
};

const getPatientById = (id: string): Patient | undefined => {
  return patientData.find((patient) => patient.id === id);
};

const addPatient = (patient: NewPatient): NonSensitivePatient => {
  const newPatient = {
    id: uuid(),
    entries: [],
    ...patient,
  };

  patientData.push(newPatient);

  const NonSensitiveNewPatient = parseNonsensitivePatient(newPatient);

  return NonSensitiveNewPatient;
};

const addPatientEntry = (id: Patient["id"], entry: NewEntry): Entry => {
  const patient = patientData.find((patient) => patient.id === id);

  if (!patient) {
    throw new Error(`No patient found.`);
  } else {
    const addedEntry = { ...entry, id: uuid() };
    patient.entries.push(addedEntry);

    return addedEntry;
  }
};

export default {
  getPatients,
  getNonSensitivePatients,
  getPatientById,
  addPatient,
  addPatientEntry,
};
