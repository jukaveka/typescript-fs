import { TextField } from "@mui/material";
import { Discharge } from "../../types";

interface Props {
  dischargeDate: Discharge["date"];
  setDischargeDate: React.Dispatch<React.SetStateAction<string>>;
  dischargeCriteria: Discharge["criteria"];
  setDischargeCriteria: React.Dispatch<React.SetStateAction<string>>;
}

const HospitalEntryForm = ({
  dischargeDate,
  setDischargeDate,
  dischargeCriteria,
  setDischargeCriteria,
}: Props) => {
  return (
    <>
      <TextField
        label="Date of discharge"
        id="new-entry-discharge-date"
        variant="standard"
        value={dischargeDate}
        onChange={(event) => setDischargeDate(event.target.value)}
      />

      <br />
      <br />

      <TextField
        label="Criteria for discharge"
        id="new-entry-discharge-criteria"
        multiline
        rows={2}
        value={dischargeCriteria}
        onChange={(event) => setDischargeCriteria(event.target.value)}
      />
    </>
  );
};

export default HospitalEntryForm;
