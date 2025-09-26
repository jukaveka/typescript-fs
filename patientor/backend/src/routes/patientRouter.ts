import express from "express";
import { Response } from "express";
import { NonSensitivePatient } from "../types";
import patientService from "../services/patientService";
import { toNewPatient } from "../utils/toNewPatient";
import { parseErrorMessage } from "../utils/parseValue";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  return res.send(patientService.getNonSensitivePatients());
});

router.post("/", (req, res: Response<NonSensitivePatient | string>) => {
  try {
    const validatedPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(validatedPatient);

    return res.send(addedPatient);
  } catch (error) {
    return res.status(400).send(parseErrorMessage(error));
  }
});

export default router;
