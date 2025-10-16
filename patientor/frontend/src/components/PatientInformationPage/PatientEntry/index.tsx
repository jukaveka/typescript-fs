import { Entry } from "../../../types";

import PatientEntryHeader from "./PatientEntryHeader";
import PatientEntryTypeDetails from "./PatientEntryTypeDetails";
import DiagnosisList from "../DiagnosisList";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

interface Props {
  entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls={`${entry.id}-content`}
          id={`${entry.id}-header`}
        >
          <PatientEntryHeader entry={entry} />
        </AccordionSummary>

        <AccordionDetails>
          <div>
            <PatientEntryTypeDetails entry={entry} />
          </div>

          <br />

          <div>
            <Typography variant="h6"> Description </Typography>
            <Typography> {entry.description} </Typography>
          </div>
          <div>
            {entry.diagnosisCodes === undefined ? null : (
              <>
                <Typography variant="h6"> Diagnosis </Typography>
                <DiagnosisList diagnosisCodes={entry.diagnosisCodes} />
              </>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
