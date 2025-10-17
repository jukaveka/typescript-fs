import { TextField } from "@mui/material";
import { HospitalEntryFields } from "../../../types";

interface Props {
  hospitalEntryFields: HospitalEntryFields;
  setHospitalEntryFields: React.Dispatch<
    React.SetStateAction<HospitalEntryFields>
  >;
}

const HospitalEntryForm = ({
  hospitalEntryFields,
  setHospitalEntryFields,
}: Props) => {
  const handleDischargeDateChange = (newValue: string) => {
    const newDischargeObject = {
      ...hospitalEntryFields.discharge,
      date: newValue,
    };

    setHospitalEntryFields({ discharge: newDischargeObject });
  };

  const handleNewDischargeCriteria = (newValue: string) => {
    const newDischargeObject = {
      ...hospitalEntryFields.discharge,
      criteria: newValue,
    };

    setHospitalEntryFields({ discharge: newDischargeObject });
  };

  return (
    <>
      <TextField
        label="Date of discharge"
        id="new-entry-discharge-date"
        variant="standard"
        value={hospitalEntryFields.discharge.date}
        onChange={(event) => handleDischargeDateChange(event.target.value)}
      />

      <TextField
        label="Criteria for discharge"
        id="new-entry-discharge-criteria"
        multiline
        rows={2}
        value={hospitalEntryFields.discharge.criteria}
        onChange={(event) => handleNewDischargeCriteria(event.target.value)}
      />
    </>
  );
};

export default HospitalEntryForm;
