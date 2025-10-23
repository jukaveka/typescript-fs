import { EntryFormFields } from "../../../../types/PatientEntryTypes";

import { dateOrderIsValid } from "../../../../utils/dateOperations";

import { Box, TextField } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const HospitalEntryFields = ({
  entryFormFields,
  setEntryFormFields,
}: Props) => {
  const handleDischargeDateChange = (newValue: string) => {
    const newDischargeObject = {
      ...entryFormFields.discharge,
      date: newValue,
    };

    setEntryFormFields({ ...entryFormFields, discharge: newDischargeObject });
  };

  const handleNewDischargeCriteria = (newValue: string) => {
    const newDischargeObject = {
      ...entryFormFields.discharge,
      criteria: newValue,
    };

    setEntryFormFields({ ...entryFormFields, discharge: newDischargeObject });
  };

  return (
    <>
      <Box>
        {dateOrderIsValid(
          entryFormFields.date,
          entryFormFields.discharge.date
        ) ? (
          <>
            <TextField
              type="date"
              id="new-entry-discharge-date"
              label="Date of discharge"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              value={entryFormFields.discharge.date}
              onChange={(event) =>
                handleDischargeDateChange(event.target.value)
              }
            />
          </>
        ) : (
          <>
            <TextField
              error
              helperText="Discharge date can't be earlier than entry date"
              type="date"
              id="new-entry-discharge-date"
              label="Date of discharge"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              value={entryFormFields.discharge.date}
              onChange={(event) =>
                handleDischargeDateChange(event.target.value)
              }
            />
          </>
        )}
      </Box>

      <TextField
        label="Criteria for discharge"
        id="new-entry-discharge-criteria"
        multiline
        rows={2}
        value={entryFormFields.discharge.criteria}
        onChange={(event) => handleNewDischargeCriteria(event.target.value)}
      />
    </>
  );
};

export default HospitalEntryFields;
