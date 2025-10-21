import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Entry, EntryFormFields } from "../../../../types";
import HospitalEntryFields from "./HospitalEntryFields";
import OccupationalEntryFields from "./OccupationalEntryFields";
import HealthCheckEntryFields from "./HealthCheckEntryFields";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
  defaultFormValues: EntryFormFields;
}

const EntryTypeFields = ({
  entryFormFields,
  setEntryFormFields,
  defaultFormValues,
}: Props) => {
  const renderTypeSpecificFields = () => {
    switch (entryFormFields.type) {
      case "Hospital":
        return (
          <HospitalEntryFields
            entryFormFields={entryFormFields}
            setEntryFormFields={setEntryFormFields}
          />
        );
      case "OccupationalHealthcare":
        return (
          <OccupationalEntryFields
            entryFormFields={entryFormFields}
            setEntryFormFields={setEntryFormFields}
          />
        );
      case "HealthCheck":
        return (
          <HealthCheckEntryFields
            entryFormFields={entryFormFields}
            setEntryFormFields={setEntryFormFields}
          />
        );
      default:
        return null;
    }
  };

  const handleEntryTypeChange = (event: SelectChangeEvent) => {
    setEntryFormFields({
      ...entryFormFields,

      type: event.target.value as Entry["type"],

      discharge: defaultFormValues.discharge,

      employerName: defaultFormValues.employerName,
      sickLeave: defaultFormValues.sickLeave,

      healthCheckRating: defaultFormValues.healthCheckRating,
    });
  };
  return (
    <>
      <Select
        id="new-entry-type"
        fullWidth
        value={entryFormFields.type}
        onChange={handleEntryTypeChange}
      >
        <MenuItem key={`entry-type-hospital`} value={"Hospital"}>
          Hospital
        </MenuItem>
        <MenuItem
          key={`entry-type-occupational`}
          value={"OccupationalHealthcare"}
        >
          Occupational healthcare
        </MenuItem>
        <MenuItem key={`entry-type-healthcheck`} value={"HealthCheck"}>
          Health check
        </MenuItem>
      </Select>

      {renderTypeSpecificFields()}
    </>
  );
};

export default EntryTypeFields;
