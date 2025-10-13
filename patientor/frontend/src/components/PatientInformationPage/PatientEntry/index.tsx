import { Diagnosis, Entry } from "../../../types";

import PatientEntryHeader from "./PatientEntryHeader";
import PatientEntryDiagnosis from "./PatientEntryDiagnosis";
import PatientEntryTypeDetails from "./PatientEntryTypeDetails";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const PatientEntry = ({ entry, diagnoses }: Props) => {
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

          <br />

          <div>
            <PatientEntryDiagnosis
              entryCodes={entry.diagnosisCodes}
              diagnoses={diagnoses}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
