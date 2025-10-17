import { MenuItem, Select } from "@mui/material";
import { Entry, EntryFormFields } from "../../../../types";
import HospitalEntryFields from "./HospitalEntryFields";
import OccupationalEntryFields from "./OccupationalEntryFields";
import HealthCheckEntryFields from "./HealthCheckEntryFields";

interface Props {
  entryFormFields: EntryFormFields;
  setEntryFormFields: React.Dispatch<React.SetStateAction<EntryFormFields>>;
}

const EntryTypeFields = ({ entryFormFields, setEntryFormFields }: Props) => {
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
  return (
    <>
      <Select
        id="new-entry-type"
        fullWidth
        value={entryFormFields.type}
        onChange={(event) =>
          setEntryFormFields({
            ...entryFormFields,
            type: event.target.value as Entry["type"],
          })
        }
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
