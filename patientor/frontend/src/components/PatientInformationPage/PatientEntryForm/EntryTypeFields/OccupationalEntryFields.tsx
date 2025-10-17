import { TextField } from "@mui/material";
import { EntryFormFields } from "../../../../types";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const OccupationalEntryForm = ({
  entryFormFields,
  setEntryFormFields,
}: Props) => {
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

  return (
    <>
      <TextField
        label="Employer"
        id="new-entry-employer-name"
        variant="standard"
        value={entryFormFields.employerName}
        onChange={(event) => handleEmployerNameChange(event.target.value)}
      />

      <TextField
        label="Sick leave starts at"
        id="new-entry-sick-leave-start"
        variant="standard"
        value={entryFormFields.sickLeave.startDate}
        onChange={(event) => handleSickLeaveStartDateChange(event.target.value)}
      />

      <TextField
        label="Sick leave ends at"
        id="new-entry-sick-leave-end"
        variant="standard"
        value={entryFormFields.sickLeave.endDate}
        onChange={(event) => handleSickleaveEndDateChange(event.target.value)}
      />
    </>
  );
};

export default OccupationalEntryForm;
