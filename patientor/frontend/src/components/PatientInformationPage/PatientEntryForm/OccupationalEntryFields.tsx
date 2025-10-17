import { TextField } from "@mui/material";
import { OccupationalEntryFields } from "../../../types";

interface Props {
  occupationalEntryFields: OccupationalEntryFields;
  setOccupationalEntryFields: React.Dispatch<
    React.SetStateAction<OccupationalEntryFields>
  >;
}

const OccupationalEntryForm = ({
  occupationalEntryFields,
  setOccupationalEntryFields,
}: Props) => {
  const { employerName, sickLeave } = occupationalEntryFields;

  const handleEmployerNameChange = (newValue: string) => {
    setOccupationalEntryFields({
      ...occupationalEntryFields,
      employerName: newValue,
    });
  };

  const handleSickLeaveStartDateChange = (newValue: string) => {
    const newSickLeaveObject = {
      ...sickLeave,
      startDate: newValue,
    };

    setOccupationalEntryFields({
      ...occupationalEntryFields,
      sickLeave: newSickLeaveObject,
    });
  };

  const handleSickleaveEndDateChange = (newValue: string) => {
    const newSickLeaveObject = {
      ...sickLeave,
      endDate: newValue,
    };

    setOccupationalEntryFields({
      ...occupationalEntryFields,
      sickLeave: newSickLeaveObject,
    });
  };

  return (
    <>
      <TextField
        label="Employer"
        id="new-entry-employer-name"
        variant="standard"
        value={employerName}
        onChange={(event) => handleEmployerNameChange(event.target.value)}
      />

      <TextField
        label="Sick leave starts at"
        id="new-entry-sick-leave-start"
        variant="standard"
        value={sickLeave.startDate}
        onChange={(event) => handleSickLeaveStartDateChange(event.target.value)}
      />

      <TextField
        label="Sick leave ends at"
        id="new-entry-sick-leave-end"
        variant="standard"
        value={sickLeave.endDate}
        onChange={(event) => handleSickleaveEndDateChange(event.target.value)}
      />
    </>
  );
};

export default OccupationalEntryForm;
