type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

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
  sickLeave?: SickLeave;
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

export type EntryFormValues =
  | UnionOmit<HospitalEntry, "id">
  | UnionOmit<OccupationalHealthCareEntry, "id">
  | UnionOmit<HealthCheckEntry, "id">;

export type BaseEntryFormValues = Pick<
  Entry,
  "date" | "specialist" | "diagnosisCodes" | "description" | "type"
>;

export type HospitalEntryFormValues = Pick<HospitalEntry, "discharge">;

export type OccupationalEntryFormValues = Pick<
  OccupationalHealthCareEntry,
  "employerName" | "sickLeave"
>;

export type HealthCheckEntryFormValues = Pick<
  HealthCheckEntry,
  "healthCheckRating"
>;
