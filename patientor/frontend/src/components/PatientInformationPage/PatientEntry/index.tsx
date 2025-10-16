import { Entry } from "../../../types";

import PatientEntryHeader from "./PatientEntryHeader";
import PatientEntryDetails from "./PatientEntryDetails";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
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
          <PatientEntryDetails entry={entry} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PatientEntry;
