import { v4 as uuid } from "uuid";
import patientData from "../data/patientData";
import { Patient, NonSensitivePatient, NewPatient } from "../types";
import { toNonSensitivePatient } from "../utils/toPatient";

const getPatients = (): Patient[] => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
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

  return toNonSensitivePatient(newPatient);
};

export default {
  getPatients,
  getNonSensitivePatients,
  getPatientById,
  addPatient,
};
