import { Diagnosis } from "./DiagnosisTypes";

export interface BaseEntry {
  id: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
  description: string;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export interface SickLeave {
  startDate: string;
  endDate: string;
}

export interface EntryFormSickLeave extends SickLeave {
  ordered?: boolean;
}

export interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave: EntryFormSickLeave;
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
