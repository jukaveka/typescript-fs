import { Diagnosis, Entry } from "../types";
import PatientEntry from "./PatientEntry";

interface Props {
  entries: Entry[];
  diagnoses: Diagnosis[];
}

const PatientEntries = ({ entries, diagnoses }: Props) => {
  return (
    <>
      {entries.map((entry) => {
        return <PatientEntry entry={entry} diagnoses={diagnoses} />;
      })}
    </>
  );
};

export default PatientEntries;
