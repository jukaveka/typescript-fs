import { EntryFormFields } from "../../../types";
import { assertNever } from "../../../utils/assertNever";

import DiagnosisList from "../DiagnosisList";
import HealthCheckEntryDetails from "../PatientEntry/PatientEntryTypeDetails/HealthCheckEntryDetails";
import HospitalEntryDetails from "../PatientEntry/PatientEntryTypeDetails/HospitalEntryDetails";
import OccupationalEntryDetails from "../PatientEntry/PatientEntryTypeDetails/OccupationalEntryDetails";

import { Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
  readyToSubmit: boolean;
}

const FormReview = ({ entryFormFields, readyToSubmit }: Props) => {
  console.log(readyToSubmit);
  const renderTypeSpecificFields = (type: EntryFormFields["type"]) => {
    switch (type) {
      case "Hospital":
        return <HospitalEntryDetails discharge={entryFormFields.discharge} />;
      case "OccupationalHealthcare":
        return (
          <OccupationalEntryDetails
            employerName={entryFormFields.employerName}
            sickLeave={entryFormFields.sickLeave}
          />
        );
      case "HealthCheck":
        return (
          <HealthCheckEntryDetails
            healthCheckRating={entryFormFields.healthCheckRating}
          />
        );
      default:
        return assertNever(type);
    }
  };

  const entryHasNoDiagnosis = () => {
    return (
      entryFormFields.diagnosisCodes === undefined ||
      entryFormFields.diagnosisCodes.length === 0
    );
  };

  if (!readyToSubmit) {
    return (
      <Typography variant="subtitle1">
        Review is not readable until you've filled appropriate fields.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="subtitle1">
        Review the information you've added.
      </Typography>

      <Typography variant="subtitle1">
        If you notice typos, mistakes or other issues, go back and make
        appropriate changes
      </Typography>

      <Typography variant="subtitle1">
        Submit if all of the information given is correct
      </Typography>

      <fieldset style={{ marginBottom: "20px", padding: "20px" }}>
        <Typography variant="h6">Basic information</Typography>
        <Typography> Date - {entryFormFields.date} </Typography>
        <Typography> Specialist - {entryFormFields.specialist} </Typography>

        <Typography variant="h6">Description</Typography>
        <Typography> {entryFormFields.description} </Typography>

        {entryHasNoDiagnosis() ? null : (
          <>
            <Typography variant="h6">Diagnosis</Typography>
            {entryFormFields.diagnosisCodes === undefined ? (
              <Typography> No diagnosis added </Typography>
            ) : (
              <DiagnosisList diagnosisCodes={entryFormFields.diagnosisCodes} />
            )}
          </>
        )}

        {renderTypeSpecificFields(entryFormFields.type)}
      </fieldset>
    </>
  );
};

export default FormReview;
