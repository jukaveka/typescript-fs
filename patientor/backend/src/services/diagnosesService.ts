import diagnosesData from "../data/diagnosisData";

import { Diagnosis } from "../types";

const getDiagnoses = (): Diagnosis[] => {
  return diagnosesData;
};

export default {
  getDiagnoses,
};
