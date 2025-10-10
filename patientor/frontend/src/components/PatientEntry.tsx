import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Diagnosis, Entry } from "../types";
import { ArrowDropDown } from "@mui/icons-material";
import { assertNever } from "../utils/assertNever";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const PatientEntry = ({ entry, diagnoses }: Props) => {
  const parseVisitType = (type: Entry["type"]) => {
    switch (type) {
      case "Hospital":
        return <> Hospital</>;
      case "OccupationalHealthcare":
        return <> Occupational healthcare</>;
      case "HealthCheck":
        return <> Health checkup</>;
      default:
        return assertNever(type);
    }
  };

  const findEntryDiagnoses = (
    entryCodes: Array<Diagnosis["code"]> | undefined
  ): Array<Diagnosis> => {
    if (typeof entryCodes === "undefined") {
      return [];
    } else {
      return diagnoses.filter((diagnosis) =>
        entryCodes.includes(diagnosis.code)
      );
    }
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls={`${entry.id}-content`}
          id={`${entry.id}-header`}
        >
          <Typography component="span">
            {entry.date} - {parseVisitType(entry.type)} - {entry.specialist}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {entry.description}
          <br />
          {findEntryDiagnoses(entry.diagnosisCodes).map((diagnosis) => (
            <p>
              <b> {diagnosis.code} </b>
              {diagnosis.name}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
