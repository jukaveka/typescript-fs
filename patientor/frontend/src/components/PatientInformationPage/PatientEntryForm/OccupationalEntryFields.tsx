import { TextField } from "@mui/material";
import { OccupationalHealthCareEntry, SickLeave } from "../../../types";

interface Props {
  employerName: OccupationalHealthCareEntry["employerName"];
  setEmployerName: React.Dispatch<React.SetStateAction<string>>;
  sickLeaveStartDate: SickLeave["startDate"];
  setSickLeaveStartDate: React.Dispatch<React.SetStateAction<string>>;
  sickLeaveEndDate: SickLeave["endDate"];
  setSickLeaveEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const OccupationalEntryForm = ({
  employerName,
  setEmployerName,
  sickLeaveStartDate,
  setSickLeaveStartDate,
  sickLeaveEndDate,
  setSickLeaveEndDate,
}: Props) => {
  return (
    <>
      <TextField
        label="Employer"
        id="new-entry-employer-name"
        variant="standard"
        value={employerName}
        onChange={(event) => setEmployerName(event.target.value)}
      />

      <TextField
        label="Sick leave starts at"
        id="new-entry-sick-leave-start"
        variant="standard"
        value={sickLeaveStartDate}
        onChange={(event) => setSickLeaveStartDate(event.target.value)}
      />

      <TextField
        label="Sick leave ends at"
        id="new-entry-sick-leave-end"
        variant="standard"
        value={sickLeaveEndDate}
        onChange={(event) => setSickLeaveEndDate(event.target.value)}
      />
    </>
  );
};

export default OccupationalEntryForm;
