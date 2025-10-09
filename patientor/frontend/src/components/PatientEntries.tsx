import { Entry } from "../types";
import PatientEntry from "./PatientEntry";

interface Props {
  entries: Entry[];
}

const PatientEntries = ({ entries }: Props) => {
  return (
    <>
      {entries.map((entry) => {
        return <PatientEntry entry={entry} />;
      })}
    </>
  );
};

export default PatientEntries;
