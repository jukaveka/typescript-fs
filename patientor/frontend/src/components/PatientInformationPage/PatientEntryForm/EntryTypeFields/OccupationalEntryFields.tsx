import { useState } from "react";

import { EntryFormFields } from "../../../../types";

import { dateOrderIsValid } from "../../../../utils/dateOperations";

import { Box, Switch, TextField, Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const OccupationalEntryForm = ({
  entryFormFields,
  setEntryFormFields,
}: Props) => {
  const [sickLeaveFormVisible, setSickLeaveFormVisible] = useState(false);

  const handleEmployerNameChange = (newValue: string) => {
    setEntryFormFields({
      ...entryFormFields,
      employerName: newValue,
    });
  };

  const handleSickLeaveStartDateChange = (newValue: string) => {
    const newSickLeaveObject = {
      ...entryFormFields.sickLeave,
      startDate: newValue,
    };

    setEntryFormFields({
      ...entryFormFields,
      sickLeave: newSickLeaveObject,
    });
  };

  const handleSickleaveEndDateChange = (newValue: string) => {
    const newSickLeaveObject = {
      ...entryFormFields.sickLeave,
      endDate: newValue,
    };

    setEntryFormFields({
      ...entryFormFields,
      sickLeave: newSickLeaveObject,
    });
  };

  const handleSickLeaveRequiredChange = () => {
    setSickLeaveFormVisible(!sickLeaveFormVisible);
  };

  return (
    <>
      <TextField
        label="Employer"
        id="new-entry-employer-name"
        variant="standard"
        value={entryFormFields.employerName}
        onChange={(event) => handleEmployerNameChange(event.target.value)}
      />

      <Typography variant="subtitle1">
        Does patient require sick leave?
        <Box>
          <Switch
            size="medium"
            checked={sickLeaveFormVisible}
            onChange={handleSickLeaveRequiredChange}
          />
        </Box>
      </Typography>

      {!sickLeaveFormVisible ? null : (
        <>
          <TextField
            type="date"
            label="Sick leave starts at"
            id="new-entry-sick-leave-start"
            variant="standard"
            InputLabelProps={{ shrink: true }}
            value={entryFormFields.sickLeave.startDate}
            onChange={(event) =>
              handleSickLeaveStartDateChange(event.target.value)
            }
          />

          {dateOrderIsValid(
            entryFormFields.sickLeave.startDate,
            entryFormFields.sickLeave.endDate
          ) ? (
            <>
              <TextField
                type="date"
                label="Sick leave ends at"
                id="new-entry-sick-leave-end"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={entryFormFields.sickLeave.endDate}
                onChange={(event) =>
                  handleSickleaveEndDateChange(event.target.value)
                }
              />
            </>
          ) : (
            <>
              <TextField
                error
                helperText="Sick leave ending date can't be later than starting date"
                type="date"
                label="Sick leave ends at"
                id="new-entry-sick-leave-end"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={entryFormFields.sickLeave.endDate}
                onChange={(event) =>
                  handleSickleaveEndDateChange(event.target.value)
                }
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default OccupationalEntryForm;
