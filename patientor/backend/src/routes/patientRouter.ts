import express from "express";
import { Response } from "express";
import { z } from "zod";
import { NonSensitivePatient } from "../types";
import patientService from "../services/patientService";
import { NewPatientSchema } from "../utils/toPatient";

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

export default router;
