import diagnosesData from "../data/diagnosisData";

import { Diagnosis } from "../types/diagnosisTypes";

const getDiagnoses = (): Diagnosis[] => {
  return diagnosesData;
};

export default {
  getDiagnoses,
};
