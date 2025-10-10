import { Diagnosis } from "./diagnosisTypes";

import { z } from "zod";

export interface BaseEntry {
  id: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
  description: string;
}

const BaseEntrySchema = z.object({
  id: z.string(),
  date: z.string().date(),
  specialist: z.string(),
  diagnosisCodes: z.string().array().optional(),
  description: z.string(),
});

export enum healthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

const HealthCheckEntrySchema = BaseEntrySchema.extend({
  type: z.string("HealthCheck"),
  healthCheckRating: z.nativeEnum(healthCheckRating),
});

const OccupationalHealhtCareSchema = BaseEntrySchema.extend({
  type: z.string("OccupationalHealthcare"),
  employerName: z.string(),
  sickLeave: z
    .object({ startDate: z.string().date(), endDate: z.string().date() })
    .optional(),
});

const HospitalEntrySchema = BaseEntrySchema.extend({
  type: z.string("Hospital"),
  discharge: z.object({ date: z.string().date(), criteria: z.string() }),
});

export const EntrySchema = z.discriminatedUnion("type", [
  HealthCheckEntrySchema,
  OccupationalHealhtCareSchema,
  HospitalEntrySchema,
]);

export type Entry = z.infer<typeof EntrySchema>;

export const NewEntrySchema = z.discriminatedUnion("type", [
  HealthCheckEntrySchema.omit({ id: true }),
  OccupationalHealhtCareSchema.omit({ id: true }),
  HospitalEntrySchema.omit({ id: true }),
]);

export type NewEntry = z.infer<typeof NewEntrySchema>;
