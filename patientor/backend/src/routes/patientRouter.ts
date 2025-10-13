import express from "express";
import { Response } from "express";
import { z } from "zod";
import { NonSensitivePatient, NewPatientSchema } from "../types/patientTypes";
import patientService from "../services/patientService";
import { parseNewEntry } from "../utils/parseValue";
import { NewEntry } from "../types/entryTypes";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  return res.send(patientService.getNonSensitivePatients());
});

router.get("/:id", (req, res) => {
  const patient = patientService.getPatientById(req.params.id);

  return res.send(patient);
});

router.post("/", (req, res) => {
  try {
    const validatedPatient = NewPatientSchema.parse(req.body);

    const addedPatient = patientService.addPatient(validatedPatient);

    return res.send(addedPatient);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send({ error: error.issues });
    } else {
      return res.status(400).send({ error: "unknown error " });
    }
  }
});

router.post("/:id/entries", (req, res) => {
  const patientId = req.params.id;

  try {
    const entry: NewEntry = parseNewEntry(req.body);

    const addedEntry = patientService.addPatientEntry(patientId, entry);

    return res.send(addedEntry);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({ error: error.message });
    } else {
      return res.status(400).send({ error: "unknown error " });
    }
  }
});

export default router;
