import { z } from "zod";
import { NewPatientSchema } from "./utils/toPatient";

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Entry {

}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[]
}

export type NonSensitivePatient = Omit<Patient, "ssn">;

export type NewPatient = z.infer<typeof NewPatientSchema>;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
