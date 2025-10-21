import { z } from "zod";

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface BaseEntry {
  id: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
  description: string;
}

export enum healthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: healthCheckRating;
}

export interface SickLeave {
  startDate: string;
  endDate: string;
}

export interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave: SickLeave;
}

export interface Discharge {
  date: string;
  criteria: string;
}

export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}

export type Entry =
  | HealthCheckEntry
  | OccupationalHealthCareEntry
  | HospitalEntry;

export type newEntry =
  | Omit<HealthCheckEntry, "id">
  | Omit<OccupationalHealthCareEntry, "id">
  | Omit<HospitalEntry, "id">;

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;

export type BaseEntryFields = Pick<
  Entry,
  "date" | "specialist" | "diagnosisCodes" | "description" | "type"
>;

export type HospitalEntryFields = Pick<HospitalEntry, "discharge">;

export type OccupationalEntryFields = Pick<
  OccupationalHealthCareEntry,
  "employerName" | "sickLeave"
>;

export type HealthCheckEntryFields = Pick<
  HealthCheckEntry,
  "healthCheckRating"
>;

export type EntryFormFields = BaseEntryFields &
  HospitalEntryFields &
  OccupationalEntryFields &
  HealthCheckEntryFields;

export const ISODateSchema = z.iso.date();

export type ISODate = z.infer<typeof ISODateSchema>;
