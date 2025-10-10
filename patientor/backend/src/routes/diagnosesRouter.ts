import express from "express";
import { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import { Diagnosis } from "../types/diagnosisTypes";
const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnosesService.getDiagnoses());
});

export default router;
