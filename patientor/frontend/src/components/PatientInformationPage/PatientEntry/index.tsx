import { Entry } from "../../../types/PatientEntryTypes";

import PatientEntryHeader from "./PatientEntryHeader";
import PatientEntryDetails from "./PatientEntryDetails";

import { entryTheme } from "./EntryTheme";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

interface Props {
  entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
  const theme = createTheme(entryTheme);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default PatientEntry;
