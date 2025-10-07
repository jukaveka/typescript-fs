import { Entry } from "../types";

interface Props {
  entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
  return (
    <>
      {entry.date} {entry.specialist} {entry.description}{" "}
    </>
  );
};

export default PatientEntry;
