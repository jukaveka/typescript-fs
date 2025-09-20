import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";
import { isNotNumber } from "./utils/isNotNumber";
import { isArrayOfNumbers } from "./utils/isArrayOfNumbers";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (
    !height ||
    !weight ||
    isNotNumber(Number(height)) ||
    isNotNumber(Number(weight))
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  const bmiResult = {
    height,
    weight,
    bmi,
  };

  return res.status(200).json(bmiResult);
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  if (
    !(daily_exercises instanceof Array) ||
    isNotNumber(Number(target)) ||
    !isArrayOfNumbers(daily_exercises)
  ) {
    return res.status(400).json({ error: "Malformatted parameters" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(target, daily_exercises);

  return res.status(200).json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
