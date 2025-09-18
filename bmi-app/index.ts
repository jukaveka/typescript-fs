import express from "express";
import calculateBmi from "./bmiCalculator";
import { isNotNumber } from "./utils/isNotNumber";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (isNotNumber(Number(height)) || isNotNumber(Number(weight))) {
    res.send({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  const bmiResult = {
    height,
    weight,
    bmi,
  };

  res.send(bmiResult);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
