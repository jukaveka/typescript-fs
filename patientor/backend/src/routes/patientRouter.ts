import express from "express";
import { Response } from "express";
import { NonSensitivePatient } from "../types";
import patientService from "../services/patientService";
import { parseErrorMessage } from "../utils/parseValue";
import { NewPatientSchema } from "../utils/toPatient";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  return res.send(patientService.getNonSensitivePatients());
});

router.post("/", (req, res: Response<NonSensitivePatient | string>) => {
  try {
    const validatedPatient = NewPatientSchema.parse(req.body);

    const addedPatient = patientService.addPatient(validatedPatient);

    return res.send(addedPatient);
  } catch (error) {
    return res.status(400).send(parseErrorMessage(error));
  }
});

export default router;
