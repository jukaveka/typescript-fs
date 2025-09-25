import express from "express";
import { Response } from "express";
import { NonSensitivePatient } from "../types";
import patientService from "../services/patientService";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  console.log("Sending patient data");
  res.send(patientService.getNonSensitivePatients());
});

export default router;
