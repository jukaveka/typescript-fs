import { v4 as uuid } from "uuid";
import patientData from "../data/patientData";
import { Patient, NonSensitivePatient, NewPatient } from "../types";
import { toNonSensitivePatient } from "../utils/toNonSensitivePatient";

const getPatients = (): Patient[] => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: NewPatient): NonSensitivePatient => {
  const newPatient = {
    id: uuid(),
    ...patient,
  };

  patientData.push(newPatient);

  return toNonSensitivePatient(newPatient);
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
