import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnosesRouter";
import patientRouter from "./routes/patientRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
  console.log("Someone is pinging the endpoint");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
