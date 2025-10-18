import { EntryFormFields } from "../../../types";
import { assertNever } from "../../../utils/assertNever";

import DiagnosisList from "../DiagnosisList";
import HealthCheckEntryDetails from "../PatientEntry/PatientEntryTypeDetails/HealthCheckEntryDetails";
import HospitalEntryDetails from "../PatientEntry/PatientEntryTypeDetails/HospitalEntryDetails";
import OccupationalEntryDetails from "../PatientEntry/PatientEntryTypeDetails/OccupationalEntryDetails";

import { Typography } from "@mui/material";

interface Props {
  entryFormFields: EntryFormFields;
}

const FormReview = ({ entryFormFields }: Props) => {
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

  const reviewNotReady = () => {
    return (
      !entryFormFields.date ||
      !entryFormFields.specialist ||
      !entryFormFields.description ||
      !entryFormFields.type
    );
  };

  if (reviewNotReady()) {
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

      <fieldset>
        <Typography variant="h6">
          <b>Basic information</b>
        </Typography>
        <Typography> Date - {entryFormFields.date} </Typography>
        <Typography> Specialist - {entryFormFields.specialist} </Typography>

        <Typography variant="h6">
          <b>Description</b>
        </Typography>
        <Typography> {entryFormFields.description} </Typography>

        <Typography variant="h6">
          <b> Diagnosis</b>
        </Typography>
        {entryFormFields.diagnosisCodes === undefined ? (
          <Typography> No diagnosis added </Typography>
        ) : (
          <DiagnosisList diagnosisCodes={entryFormFields.diagnosisCodes} />
        )}

        {renderTypeSpecificFields(entryFormFields.type)}
      </fieldset>
    </>
  );
};

export default FormReview;
