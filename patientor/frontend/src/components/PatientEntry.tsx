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
  const renderEntryType = (type: Entry["type"]) => {
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

  const renderEntryTypeInformation = (entry: Entry) => {
    const type = entry.type;
    switch (type) {
      case "Hospital":
        return (
          <>
            <Typography variant="h6"> Discharge </Typography>
            <Typography> {entry.discharge.date}</Typography>
            <Typography> {entry.discharge.criteria} </Typography>
          </>
        );
      case "OccupationalHealthcare":
        return (
          <>
            <Typography variant="h6"> Employer </Typography>
            <Typography> {entry.employerName}</Typography>
          </>
        );
      case "HealthCheck":
        return (
          <>
            <Typography variant="h6"> Health rating </Typography>
            <Typography> {entry.healthCheckRating}</Typography>
          </>
        );
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
            {entry.date} - {renderEntryType(entry.type)} - {entry.specialist}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderEntryTypeInformation(entry)}
          <br />
          <Typography variant="h6"> Journal</Typography>
          <Typography>{entry.description}</Typography>
          <br />
          <Typography variant="h6"> Diagnosis </Typography>
          {findEntryDiagnoses(entry.diagnosisCodes).map((diagnosis) => (
            <p>
              <Typography>
                <b> {diagnosis.code} </b>
                {diagnosis.name}
              </Typography>
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
