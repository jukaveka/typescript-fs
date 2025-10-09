import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Entry } from "../types";
import { ArrowDropDown } from "@mui/icons-material";

interface Props {
  entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
  const parseVisitType = (type: string) => {
    switch (type) {
      case "Hospital":
        return <> Hospital</>;
      case "OccupationalHealthcare":
        return <> Occupational healthcare</>;
      case "HealthCheck":
        return <> Health checkup</>;
      default:
        return null;
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
            {entry.date} - {parseVisitType(entry.type)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6"> Attended by {entry.specialist} </Typography>
          <br />
          <br />
          {entry.description}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
